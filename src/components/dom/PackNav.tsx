import Link from "next/link";
import { DownloadIcon } from "@/components/dom/DownloadIcon";
import { usePackViewer } from "@/components/PackViewerProvider";
import * as AllModels from "@/components/quaternius";
import { formatPackName } from "@/lib/seo";

const sideStyle =
  "z-[1500] overflow-x-hidden overflow-y-auto font-leva text-sm	w-60 bg-leva-dark h-screen  transform transition-all fixed duration-700 text-leva-white p-2";

const downloadStyles =
  "absolute left-0 z-20 flex justify-center transition-all transform duration-700 bottom-1";

const buttonStyle =
  "z-[1500] font-leva text-sm	absolute w-10 h-10 bg-yellow-400 hover:w-11 hover:h-11 top-0 cursor-pointer transition-all transform duration-700 flex items-center justify-center";

const navButton =
  "z-[1500] font-leva text-sm w-10 h-10 bg-leva-dark text-leva-white cursor-pointer hover:bg-leva-medium";

/**
 * The persistent chrome: pack list, prev/next buttons and the .glb download.
 *
 * Rendered from _app, outside the Canvas, so switching packs swaps only the
 * models. It used to be tunnelled out of the Canvas, where the Suspense
 * boundary tore it down on every pack switch.
 */
export function PackNav() {
  const { id, modelUrls, model, open, toggleOpen, gotoPrev, gotoNext } = usePackViewer();

  return (
    <>
      {model && modelUrls[model.key] && (
        <a
          className={`${downloadStyles} ${open && "translate-x-60"}`}
          href={modelUrls[model.key]}
          download
        >
          <DownloadIcon />
          <span className={`leading-7`}>{".glb"}</span>
        </a>
      )}
      <div className="absolute bottom-0 right-0 z-20">
        <button type="button" className={navButton} onClick={gotoPrev}>
          {"<"}
        </button>
        <button type="button" className={navButton} onClick={gotoNext}>
          {">"}
        </button>
      </div>

      <button
        type="button"
        id="close-btn"
        className={`${buttonStyle} ${open && "translate-x-60"}`}
        onClick={toggleOpen}
      >
        {open ? "<" : ">"}
      </button>
      <div className={`${sideStyle} ${!open && "-translate-x-60"}`}>
        {open && (
          <div className="relative h-full min-h-[750px]">
            <h1 className="pt-2 mb-2 text-lg">
              <a
                className="text-leva-light-grey hover:underline hover:decoration-solid"
                href={"https://quaternius.com/"}
              >
                Free 3D Models by <span>@Quaternius</span>
              </a>
            </h1>

            <div>
              {Object.keys(AllModels).map((name) => {
                const pack_name = formatPackName(name);
                return (
                  <div
                    key={pack_name}
                    className={`hover:text-leva-light-grey hover:underline hover:decoration-solid ${
                      id === name && "underline decoration-solid"
                    }`}
                  >
                    <Link href={`/${name}`} as={`/${name}`}>
                      {pack_name}
                    </Link>
                  </div>
                );
              })}
            </div>
            <footer className="absolute bottom-0 left-0 z-30 text-leva-light-grey">
              <div>
                <a href={"https://trebeljahr.com"}>
                  Built with <span style={{ color: " #F35269" }}>♥</span> by Rico
                </a>
              </div>
              <div className="mt-1">
                <Link href="/imprint" className="hover:underline">
                  Imprint
                </Link>
              </div>
            </footer>
          </div>
        )}
      </div>
    </>
  );
}
