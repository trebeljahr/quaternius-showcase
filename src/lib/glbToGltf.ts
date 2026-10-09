const GLB_MAGIC = 0x46546c67; // "glTF"
const CHUNK_JSON = 0x4e4f534a; // "JSON"
const CHUNK_BIN = 0x004e4942; // "BIN\0"

type GltfJson = { buffers?: { uri?: string; byteLength: number }[] };

/**
 * Repacks a binary .glb as a single-file .gltf with the buffer embedded as a
 * base64 data URI.
 *
 * Quaternius ships glTF, but the site only hosts the .glb files the viewer
 * loads. Both formats hold the same JSON and binary data, so the .gltf is
 * built from the .glb on click instead of hosting a second copy of every
 * model. Every hosted .glb keeps all of its data in the BIN chunk, which the
 * spec ties to buffers[0].
 */
export async function glbToGltf(glb: ArrayBuffer): Promise<Blob> {
  const view = new DataView(glb);
  if (view.getUint32(0, true) !== GLB_MAGIC) throw new Error("Not a .glb file");

  const length = view.getUint32(8, true);
  let json: GltfJson | undefined;
  let binStart: number | undefined;

  for (let offset = 12; offset < length; ) {
    const chunkLength = view.getUint32(offset, true);
    const chunkType = view.getUint32(offset + 4, true);
    const start = offset + 8;
    if (chunkType === CHUNK_JSON) {
      json = JSON.parse(new TextDecoder().decode(new Uint8Array(glb, start, chunkLength)));
    } else if (chunkType === CHUNK_BIN) {
      binStart = start;
    }
    offset = start + chunkLength;
  }

  if (!json) throw new Error("The .glb has no JSON chunk");

  const buffer = json.buffers?.[0];
  if (binStart !== undefined && buffer && buffer.uri === undefined) {
    // The BIN chunk is padded to 4 bytes; the buffer itself is byteLength long.
    buffer.uri = await toDataUri(glb.slice(binStart, binStart + buffer.byteLength));
  }

  return new Blob([JSON.stringify(json)], { type: "model/gltf+json" });
}

function toDataUri(bytes: ArrayBuffer): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(new Blob([bytes], { type: "application/octet-stream" }));
  });
}
