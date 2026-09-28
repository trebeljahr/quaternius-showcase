import { type Ids, Out, PackViewer } from "@/components/canvas/PackViewer";
import { getPackProps } from "@/lib/packs.server";

// The site has no separate landing page: "/" serves the animals pack directly.
// A next.config.js redirect used to do this, but `output: "export"` drops
// config redirects, and rendering the pack here avoids the extra round trip.
const HOME_PACK = "animals_pack";

export default function Home() {
  return <Out />;
}

Home.canvas = (props: { id: Ids; modelUrls: Record<string, string> }) => {
  return <PackViewer {...props} />;
};

export const getStaticProps = async () => {
  // Canonical stays on /animals_pack so "/" is not indexed as duplicate content.
  return { props: await getPackProps(HOME_PACK) };
};
