// Client-side navigation keeps document.referrer pointing at whatever page first
// loaded the app, so remember the URL each route change leaves behind instead.
let lastLeftUrl: string | undefined;

export function rememberLeftUrl() {
  lastLeftUrl = window.location.href;
}

export function referringUrl(): string {
  return lastLeftUrl ?? (document.referrer || "(none)");
}
