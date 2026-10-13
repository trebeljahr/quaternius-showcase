import {
  DataTexture,
  EquirectangularReflectionMapping,
  HalfFloatType,
  LinearEncoding,
  LinearFilter,
  Loader,
  RGBAFormat,
  type Texture,
} from "three";
import { RGBELoader } from "three-stdlib";
import type { DecodedHdr } from "@/components/canvas/hdr.worker";

/**
 * RGBELoader with the decoding moved into a Web Worker (see hdr.worker.ts).
 *
 * Yields the same equirectangular half-float texture, ready for
 * <Environment map={...} />. If the worker cannot start or fails, it falls
 * back to RGBELoader on the main thread, which also reports a failed download.
 */
export class WorkerRGBELoader extends Loader {
  load(
    url: string,
    onLoad: (texture: Texture) => void,
    _onProgress?: (event: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void,
  ) {
    const finish = (texture: Texture) => {
      texture.mapping = EquirectangularReflectionMapping;
      onLoad(texture);
    };
    const decodeOnMainThread = () => new RGBELoader().load(url, finish, undefined, onError);

    let worker: Worker;
    try {
      worker = new Worker(new URL("./hdr.worker.ts", import.meta.url));
    } catch {
      decodeOnMainThread();
      return;
    }

    worker.onmessage = ({ data: decoded }: MessageEvent<DecodedHdr>) => {
      worker.terminate();
      if ("error" in decoded) {
        decodeOnMainThread();
        return;
      }
      // The settings RGBELoader.load() applies to its own half-float result.
      const texture = new DataTexture(
        decoded.data,
        decoded.width,
        decoded.height,
        RGBAFormat,
        HalfFloatType,
      );
      texture.encoding = LinearEncoding;
      texture.minFilter = LinearFilter;
      texture.magFilter = LinearFilter;
      texture.generateMipmaps = false;
      texture.flipY = true;
      texture.needsUpdate = true;
      finish(texture);
    };
    worker.onerror = () => {
      worker.terminate();
      decodeOnMainThread();
    };
    worker.postMessage(new URL(url, window.location.href).href);
  }
}
