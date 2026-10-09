import Link from "next/link";
import { DownloadIcon } from "@/components/dom/DownloadIcon";
import { GltfDownload } from "@/components/dom/GltfDownload";
import { RecentPacks } from "@/components/dom/RecentPacks";
import { usePackViewer } from "@/components/PackViewerProvider";
import * as AllModels from "@/components/quaternius";
import { formatPackName } from "@/lib/seo";

const sideStyle =
  "z-[1500] overflow-x-hidden overflow-y-auto font-leva text-sm	w-60 bg-leva-dark h-screen  transform transition-all fixed duration-700 text-leva-white p-2";

const downloadStyles =
  "absolute left-0 z-20 flex justify-center transition-all transform duration-700 bottom-1";

const buttonStyle =
  "z-[1500] font-leva text-sm	absolute w-10 h-10 bg-yellow-400 hover:w-11 hover:h-11 top-0 cursor-pointer transition-all transform duration-700 flex items-center justify-center";

const cardStyle =
  "block mb-3 p-2 border rounded border-leva-medium text-leva-light-grey hover:text-leva-white hover:border-leva-light-grey";

const navButton =
  "z-[1500] font-leva text-sm w-10 h-10 bg-leva-dark text-leva-white cursor-pointer hover:bg-leva-medium";

/**
 * The persistent chrome: pack list, prev/next buttons and the .glb and .gltf downloads.
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
        <div className={`${downloadStyles} ${open && "translate-x-60"}`}>
          <a className="flex" href={modelUrls[model.key]} download>
            <DownloadIcon />
            <span className={`leading-7`}>{".glb"}</span>
          </a>
          <GltfDownload glbUrl={modelUrls[model.key]} />
        </div>
      )}
      {/* Sits in the bottom row between the download links (left) and the
          prev/next buttons (right), so the credit is visible on phones too.
          The open sidebar carries its own credits, and the shifted download
          links would collide with this line, so it hides then. */}
      {!open && (
        <p className="pointer-events-none absolute inset-x-0 bottom-0 z-20 m-0 flex h-10 items-center justify-center pr-20 pl-32 text-center font-leva text-[10px] leading-tight text-leva-medium">
          <a
            className="pointer-events-auto hover:text-leva-dark hover:underline"
            href="https://quaternius.com"
          >
            Made by Rico, models © Quaternius
          </a>
        </p>
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
          // Flex column so the bottom block (cards + footer) sits below the
          // pack list and pushes the sidebar to scroll instead of overlapping.
          <div className="flex flex-col min-h-full">
            <h1 className="pt-2 mb-2 text-lg">
              <a
                className="text-leva-light-grey hover:underline hover:decoration-solid"
                href={"https://quaternius.com/"}
              >
                Free 3D Models by <span>@Quaternius</span>
              </a>
            </h1>

            <RecentPacks currentId={id} />

            <div>
              {Object.entries(AllModels).map(([name, pack]) => {
                const pack_name = formatPackName(name);
                return (
                  <div
                    key={pack_name}
                    className={`hover:text-leva-light-grey hover:underline hover:decoration-solid ${
                      id === name && "underline decoration-solid"
                    }`}
                  >
                    <Link href={`/${name}`} as={`/${name}`}>
                      {pack_name}{" "}
                      <span className="text-leva-light-grey">({Object.keys(pack).length})</span>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="mt-auto pt-4">
              <a className={cardStyle} href={"https://www.patreon.com/quaternius"}>
                Made by Quaternius. If you use his work, consider supporting his{" "}
                <span className="underline">Patreon</span>.
              </a>
              <footer className="text-leva-light-grey">
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
          </div>
        )}
      </div>
    </>
  );
}
