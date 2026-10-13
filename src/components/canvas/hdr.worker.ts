import { RGBELoader } from "three-stdlib";

export type DecodedHdr =
  | { width: number; height: number; data: Uint16Array<ArrayBuffer> }
  | { error: string };

// Fetches and decodes a Radiance .hdr away from the main thread. Decoding the
// 1.5 MB studio environment there cost one ~70 ms task on a laptop (several
// times that on a phone) during which the page could not respond to input.
self.onmessage = async ({ data: url }: MessageEvent<string>) => {
  let decoded: DecodedHdr;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const { width, height, data } = new RGBELoader().parse(await response.arrayBuffer());
    // RGBELoader decodes to half floats by default; its typings do not say so.
    decoded = { width, height, data: data as unknown as Uint16Array<ArrayBuffer> };
  } catch (error) {
    decoded = { error: String(error) };
  }
  self.postMessage(decoded, { transfer: "data" in decoded ? [decoded.data.buffer] : [] });
};
