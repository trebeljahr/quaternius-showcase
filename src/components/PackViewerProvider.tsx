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
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [components, setComponents] = useState<PackModel[]>([]);
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

  useEffect(() => {
    if (!id) {
      setComponents([]);
      return;
    }
    const selectedPack = AllModels[id];
    setComponents(
      Object.entries(selectedPack).map(([key, Component]) => {
        return { key, Component };
      }),
    );
  }, [id]);

  const gotoPrev = useCallback(() => {
    setIndex((old) => {
      const next = old - 1;
      if (next < 0) return components.length - 1;
      return next;
    });
  }, [components.length]);

  const gotoNext = useCallback(() => {
    setIndex((old) => {
      const next = old + 1;
      if (next >= components.length) return 0;
      return next;
    });
  }, [components.length]);

  useEffect(() => {
    setIndex(0);
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") {
        gotoNext();
      } else if (event.key === "ArrowLeft") {
        gotoPrev();
      } else if (event.key === " ") {
        stopped.current = !stopped.current;
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gotoNext, gotoPrev]);

  useEffect(() => {
    components.forEach(({ Component }) =>
      (Component as typeof Component & { render: { preload(): void } }).render.preload(),
    );
  }, [components]);

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
