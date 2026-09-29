import type { GetStaticPropsContext } from "next";
import { PackViewer } from "@/components/canvas/PackViewer";
import type { Ids } from "@/components/PackViewerProvider";
import { getPackProps, listPackIds } from "@/lib/packs.server";

// The DOM chrome is rendered by _app, which keeps it mounted across pack
// switches; the page only contributes the scene contents.
export default function Page() {
  return null;
}

Page.canvas = () => {
  return <PackViewer />;
};

export async function getStaticPaths() {
  const available = await listPackIds();

  return {
    paths: available.map((name) => ({
      params: {
        id: name,
      },
    })),
    fallback: false,
  };
}

export const getStaticProps = async ({ params: { id } }: GetStaticPropsContext<{ id: Ids }>) => {
  return { props: await getPackProps(id) };
};
