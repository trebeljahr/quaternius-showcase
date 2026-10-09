import { useSyncExternalStore } from "react";
import type { Ids } from "@/components/PackViewerProvider";
import * as AllModels from "@/components/quaternius";

const STORAGE_KEY = "recent-packs";
const MAX_RECENT = 5;
const NO_RECENT: Ids[] = [];
const PACK_IDS = new Set<string>(Object.keys(AllModels));

const listeners = new Set<() => void>();
let recent: Ids[] | undefined;

function isPackId(value: unknown): value is Ids {
  return typeof value === "string" && PACK_IDS.has(value);
}

// localStorage can throw (blocked storage, private mode) or hold stale ids of
// packs that no longer exist, so anything unexpected reads as "no history".
function readStored(): Ids[] {
  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
    return Array.isArray(parsed) ? parsed.filter(isPackId).slice(0, MAX_RECENT) : NO_RECENT;
  } catch {
    return NO_RECENT;
  }
}

function getSnapshot() {
  recent ??= readStored();
  return recent;
}

// The server and the hydration pass see no history, so the markup matches;
// React re-renders with the stored list once the page has mounted.
function getServerSnapshot() {
  return NO_RECENT;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function recordRecentPack(id: Ids) {
  const current = getSnapshot();
  if (current[0] === id) return;

  recent = [id, ...current.filter((recentId) => recentId !== id)].slice(0, MAX_RECENT);
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(recent));
  } catch {
    // Keep the in-memory list for this visit even if it cannot be persisted.
  }
  listeners.forEach((listener) => {
    listener();
  });
}

/** The last few pack pages this browser opened, most recent first. */
export function useRecentPacks() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
