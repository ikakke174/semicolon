"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// false while rendering on the server and during hydration, true once mounted in the browser.
export function useMounted(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
