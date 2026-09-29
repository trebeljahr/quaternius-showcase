import tunnel from "tunnel-rat";

// One tunnel for DOM that has to be rendered from inside the r3f Canvas.
//
// Anything pushed through <In> lives inside the Canvas' Suspense boundary, so
// React destroys its layout effects — and with them the tunnel entry — while a
// model loads. Only use it for UI that belongs to the model being loaded (the
// Leva animation controls). Persistent chrome belongs in the DOM tree instead,
// see components/dom/PackNav.
const t = tunnel();

export const { In, Out } = t;
