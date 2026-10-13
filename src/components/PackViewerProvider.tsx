import type { GroupProps } from "@react-three/fiber";
import {
  type ComponentType,
  createContext,
  type MutableRefObject,
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as AllModels from "@/components/quaternius";
import { useWindowSize } from "@/hooks/useWindowSize";

export type Ids = keyof typeof AllModels;

export type PackModel = { Component: ComponentType<GroupProps>; key: string };

interface PackViewerValue {
  id: Ids | undefined;
  // Export name -> the .glb the component loads. Built server side, because
  // neither the pack name nor the export name reconstructs the URL reliably.
  modelUrls: Record<string, string>;
  model: PackModel | undefined;
  open: boolean;
  toggleOpen: () => void;
  gotoPrev: () => void;
  gotoNext: () => void;
  stopped: MutableRefObject<boolean>;
}

const NO_MODEL_URLS: Record<string, string> = {};
const NO_MODELS: PackModel[] = [];

function listModels(id: Ids | undefined): PackModel[] {
  if (!id) return NO_MODELS;
  return Object.entries(AllModels[id]).map(([key, Component]) => ({ key, Component }));
}

function preload({ Component }: PackModel) {
  (Component as typeof Component & { render: { preload(): void } }).render.preload();
}

const PackViewerContext = createContext<PackViewerValue | null>(null);

export function usePackViewer() {
  const value = useContext(PackViewerContext);
  if (!value) throw new Error("usePackViewer must be used inside <PackViewerProvider>");
  return value;
}

/**
 * Holds the viewer state for the whole app, above the r3f Canvas.
 *
 * It lives in _app so it survives client-side route changes between packs, and
 * so the DOM chrome that reads it is never inside the Canvas' Suspense
 * boundary. Rendering that chrome from inside the Canvas made it vanish for as
 * long as the next pack's .glb took to load.
 */
export function PackViewerProvider({
  id,
  modelUrls,
  children,
}: PropsWithChildren<{ id?: Ids; modelUrls?: Record<string, string> }>) {
  // Derived during render, not in an effect, so the statically exported HTML
  // already carries the first model's download links. Set from an effect, they
  // only appeared after hydration, late enough to count as the page's LCP.
  const components = useMemo(() => listModels(id), [id]);
  // The index belongs to one pack. Keeping the pack id next to it resets the
  // position on a pack switch without a render that pairs the new pack with
  // the old index (and would fetch a model nobody asked for).
  const [position, setPosition] = useState({ id, index: 0 });
  const index = position.id === id ? position.index : 0;
  const [browsing, setBrowsing] = useState(false);
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();

  const stopped = useRef(false);

  const toggleOpen = useCallback(() => {
    setOpen((wasOpen) => !wasOpen);
  }, []);

  useEffect(() => {
    const closePopup = (event: PointerEvent) => {
      if (width < 640 && event.x > 240 && (event.target as HTMLElement).id !== "close-btn") {
        setOpen(false);
      }
    };
    window.addEventListener("pointerdown", closePopup);
    return () => {
      window.removeEventListener("pointerdown", closePopup);
    };
  }, [width]);

  const step = useCallback(
    (offset: number) => {
      setBrowsing(true);
      setPosition((old) => {
        const from = old.id === id ? old.index : 0;
        const count = Math.max(components.length, 1);
        return { id, index: (from + offset + count) % count };
      });
    },
    [id, components.length],
  );

  const gotoPrev = useCallback(() => step(-1), [step]);
  const gotoNext = useCallback(() => step(1), [step]);

  useEffect(() => {
    // Space is the viewer's only while a pack is on screen. Text pages scroll
    // with it, and the Leva animation select opens with it.
    function isViewerSpace(event: KeyboardEvent) {
      if (event.key !== " " || !id) return false;
      const target = event.target instanceof Element ? event.target : null;
      return !target?.closest("input, select, textarea, [contenteditable]");
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") {
        gotoNext();
      } else if (event.key === "ArrowLeft") {
        gotoPrev();
      } else if (isViewerSpace(event)) {
        // A clicked button keeps focus, so space would also press it again
        // (re-toggling the sidebar or skipping a model) and scroll the list.
        event.preventDefault();
        if (!event.repeat) stopped.current = !stopped.current;
      }
    }
    // Firefox presses a focused button on keyup, not keydown.
    function handleKeyUp(event: KeyboardEvent) {
      if (isViewerSpace(event)) event.preventDefault();
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [id, gotoNext, gotoPrev]);

  // Fetch the models on either side of the current one, so stepping through a
  // pack stays instant, but only once the visitor has started stepping. This
  // used to preload the whole pack on arrival: 34 MB for the 11 spaceships,
  // most of it never looked at, and seconds of main-thread parsing on a phone.
  useEffect(() => {
    if (!browsing || components.length < 2) return;
    for (const offset of [-1, 1]) {
      preload(components[(index + offset + components.length) % components.length]);
    }
  }, [browsing, components, index]);

  const model = components[index];

  const value = useMemo(
    () => ({
      id,
      modelUrls: modelUrls ?? NO_MODEL_URLS,
      model,
      open,
      toggleOpen,
      gotoPrev,
      gotoNext,
      stopped,
    }),
    [id, modelUrls, model, open, toggleOpen, gotoPrev, gotoNext],
  );

  return <PackViewerContext.Provider value={value}>{children}</PackViewerContext.Provider>;
}
