import Link from "next/link";
import type { ReactNode } from "react";
import * as AllModels from "@/components/quaternius";
import { formatPackName } from "@/lib/seo";

// Counted from the same exports the sidebar lists, so the numbers on this page
// follow the packs that actually ship instead of going stale in copy.
const packs = Object.entries(AllModels).map(([id, models]) => ({
  id,
  name: formatPackName(id),
  modelCount: Object.keys(models).length,
}));
const packCount = packs.length;
const modelCount = packs.reduce((sum, pack) => sum + pack.modelCount, 0).toLocaleString("en-US");

const linkStyle = "text-yellow-400 hover:underline";
const sectionStyle = "mb-6";
const headingStyle = "text-lg font-semibold mb-1";
const textStyle = "text-sm leading-relaxed opacity-80";
const quoteStyle = "text-sm leading-relaxed opacity-80 border-l-2 border-yellow-400 pl-3 mb-3";

function External({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle}>
      {children}
    </a>
  );
}

export default function PressPage() {
  return (
    <div className="fixed inset-0 z-[2000] overflow-y-auto bg-leva-dark text-leva-white font-leva p-8">
      <div className="max-w-2xl mx-auto">
        <p className="mb-6">
          <Link href="/" className="text-yellow-400 hover:underline text-sm">
            &larr; Back to Showcase
          </Link>
        </p>

        <h1 className="text-3xl font-bold mb-6">Press</h1>

        <p className="text-sm leading-relaxed opacity-70 mb-6">
          The Quaternius Showcase is a fan-built 3D viewer for the free low-poly model packs by{" "}
          <External href="https://quaternius.com">Quaternius</External>. It shows {packCount} packs
          and {modelCount} models live in the browser. Every model downloads as a .glb or .gltf
          file. Rico Trebeljahr built it as a side project. It is not affiliated with Quaternius.
        </p>

        <section className={sectionStyle}>
          <h2 className={headingStyle}>At a glance</h2>
          <dl className="grid grid-cols-[7rem_1fr] gap-x-3 gap-y-1 text-sm leading-relaxed opacity-80">
            <dt className="font-semibold">Name</dt>
            <dd>Quaternius Showcase</dd>
            <dt className="font-semibold">Website</dt>
            <dd>
              <External href="https://quaternius.trebeljahr.com">
                quaternius.trebeljahr.com
              </External>
            </dd>
            <dt className="font-semibold">Made by</dt>
            <dd>Rico Trebeljahr, one person, as a side project</dd>
            <dt className="font-semibold">Price</dt>
            <dd>Free, with no sign-in and no ads</dd>
            <dt className="font-semibold">Content</dt>
            <dd>
              {packCount} packs and {modelCount} models, one page per pack
            </dd>
            <dt className="font-semibold">Models</dt>
            <dd>
              By <External href="https://quaternius.com">Quaternius</External>
            </dd>
            <dt className="font-semibold">Code</dt>
            <dd>
              MIT license, public on{" "}
              <External href="https://github.com/trebeljahr/quaternius-showcase">GitHub</External>
            </dd>
          </dl>
        </section>

        <section className={sectionStyle}>
          <h2 className={headingStyle}>Credit and licenses</h2>
          <p className={`${textStyle} mb-2`}>
            Quaternius made every 3D model on this site. Quaternius publishes them for free at{" "}
            <External href="https://quaternius.com">quaternius.com</External>, under the license
            stated on each pack&apos;s page. You can support the artist on{" "}
            <External href="https://www.patreon.com/quaternius">Patreon</External>.
          </p>
          <p className={textStyle}>
            The showcase code is MIT-licensed. That license covers the code only. It does not cover
            the models.
          </p>
        </section>

        <section className={sectionStyle}>
          <h2 className={headingStyle}>Descriptions you can copy</h2>
          <p className="text-xs uppercase tracking-wide opacity-60 mb-1">Short</p>
          <blockquote className={quoteStyle}>
            The Quaternius Showcase is a fan-built 3D viewer for the free low-poly model packs by
            Quaternius. Every model renders live in the browser, and one button downloads the .glb
            file on screen. Not affiliated with Quaternius.
          </blockquote>
          <p className="text-xs uppercase tracking-wide opacity-60 mb-1">Long</p>
          <blockquote className={quoteStyle}>
            The Quaternius Showcase shows {packCount} free low-poly packs by Quaternius, with{" "}
            {modelCount} models in total. The packs cover animals, dinosaurs, fish, ships, tanks,
            mechs, spaceships, modular dungeons, modular characters, sci-fi guns, crops, houses and
            nature. Each pack has its own page. The arrow keys switch models, the space bar stops
            the rotation, and a button downloads the .glb file you see. Quaternius made every model.
            Rico Trebeljahr built the viewer with Next.js and react-three-fiber, as a fan project.
            It is not affiliated with Quaternius.
          </blockquote>
        </section>

        <section className={sectionStyle}>
          <h2 className={headingStyle}>See the model before you download it</h2>
          <p className={`${textStyle} mb-2`}>
            Each model renders live, with shadows and HDRI lighting. You see the actual mesh from
            every side, not a thumbnail.
          </p>
          <ul className={`${textStyle} list-disc pl-5`}>
            <li>
              &larr; and &rarr; switch to the previous or next model. The buttons in the
              bottom-right corner do the same.
            </li>
            <li>The space bar stops or starts the rotation.</li>
            <li>Drag to orbit the model. Scroll to zoom.</li>
            <li>
              The .glb and .gltf buttons in the bottom-left corner download the model on screen.
            </li>
            <li>The sidebar lists every pack. Each pack has its own URL, like /dinosaurs_pack.</li>
          </ul>
        </section>

        <section className={sectionStyle}>
          <h2 className={headingStyle}>How to describe it</h2>
          <ul className={`${textStyle} list-disc pl-5`}>
            <li>
              Call it a fan-built viewer. It is not an official Quaternius site, and Quaternius did
              not build it.
            </li>
            <li>Credit Quaternius for the models and link to quaternius.com.</li>
            <li>It is not a store. Nothing on the site is for sale.</li>
            <li>
              The pack and model counts on this page come from the site&apos;s code and update with
              every release. Check them here before you quote a number.
            </li>
          </ul>
        </section>

        <section className={sectionStyle}>
          <h2 className={headingStyle}>All {packCount} packs</h2>
          <ul className="grid sm:grid-cols-2 gap-x-6 text-sm leading-relaxed opacity-80">
            {packs.map((pack) => (
              <li key={pack.id}>
                <Link href={`/${pack.id}`} className={linkStyle}>
                  {pack.name}
                </Link>{" "}
                <span className="opacity-70">
                  ({pack.modelCount} {pack.modelCount === 1 ? "model" : "models"})
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className={sectionStyle}>
          <h2 className={headingStyle}>Technical details</h2>
          <ul className={`${textStyle} list-disc pl-5`}>
            <li>
              Next.js 15 with the pages router. The build exports static HTML, one page per pack,
              served from Cloudflare.
            </li>
            <li>
              react-three-fiber with drei: Stage (rembrandt preset, shadows on), Environment with
              the Potsdamer Platz HDRI, and OrbitControls.
            </li>
            <li>Each model is a typed React component, generated from its GLB file.</li>
            <li>
              When a pack opens, the page starts loading every model in that pack. The next model is
              often ready before you switch to it.
            </li>
            <li>Tailwind CSS for styles. Biome for linting and formatting.</li>
          </ul>
        </section>

        <section>
          <h2 className={headingStyle}>Contact</h2>
          <p className={textStyle}>
            Email:{" "}
            <a href="mailto:imprint+quaternius@trebeljahr.com" className={linkStyle}>
              imprint+quaternius@trebeljahr.com
            </a>
            <br />
            Website: <External href="https://trebeljahr.com">trebeljahr.com</External>
            <br />
            Legal details:{" "}
            <Link href="/imprint" className={linkStyle}>
              Imprint
            </Link>
            {" · "}
            <Link href="/privacy" className={linkStyle}>
              Privacy
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      title: "Press – Quaternius Showcase",
      description: `Facts, credit and copy-ready descriptions for the Quaternius Showcase: a fan-built 3D viewer for ${packCount} free low-poly packs by Quaternius.`,
      path: "/press",
    },
  };
};
