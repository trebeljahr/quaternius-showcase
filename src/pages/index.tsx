import { PackViewer } from "@/components/canvas/PackViewer";
import { getPackProps } from "@/lib/packs.server";

// The site has no separate landing page: "/" serves the animals pack directly.
// A next.config.js redirect used to do this, but `output: "export"` drops
// config redirects, and rendering the pack here avoids the extra round trip.
const HOME_PACK = "animals_pack";

// The DOM chrome is rendered by _app, which keeps it mounted across pack
// switches; the page only contributes the scene contents.
export default function Home() {
  return null;
}

Home.canvas = () => {
  return <PackViewer />;
};

export const getStaticProps = async () => {
  // Canonical stays on /animals_pack so "/" is not indexed as duplicate content.
  return { props: await getPackProps(HOME_PACK) };
};
