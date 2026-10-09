import { useState } from "react";
import { DownloadIcon } from "@/components/dom/DownloadIcon";
import { glbToGltf } from "@/lib/glbToGltf";

/**
 * Downloads the current model as .gltf. Only the .glb is hosted, so the click
 * fetches it (usually from the cache, since the viewer just loaded it) and
 * repacks it in the browser.
 */
export function GltfDownload({ glbUrl }: { glbUrl: string }) {
  const [busy, setBusy] = useState(false);

  const download = async () => {
    setBusy(true);
    try {
      const response = await fetch(glbUrl);
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      const href = URL.createObjectURL(await glbToGltf(await response.arrayBuffer()));
      const link = document.createElement("a");
      link.href = href;
      link.download = decodeURIComponent(glbUrl.split("/").pop() ?? "model.glb").replace(
        /\.glb$/i,
        ".gltf",
      );
      link.click();
      // Revoking right after click() can cancel the download in some browsers.
      setTimeout(() => URL.revokeObjectURL(href), 30_000);
    } catch (error) {
      console.error(`Could not build a .gltf from ${glbUrl}`, error);
    } finally {
      setBusy(false);
    }
  };

  return (
    <button
      type="button"
      className="flex cursor-pointer disabled:cursor-wait disabled:opacity-60"
      onClick={download}
      disabled={busy}
    >
      <DownloadIcon />
      <span className={`leading-7`}>{".gltf"}</span>
    </button>
  );
}
