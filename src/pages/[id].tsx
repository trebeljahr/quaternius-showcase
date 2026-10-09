import type { GetStaticPropsContext } from "next";
import { useEffect } from "react";
import { PackViewer } from "@/components/canvas/PackViewer";
import type { Ids } from "@/components/PackViewerProvider";
import { recordRecentPack } from "@/hooks/useRecentPacks";
import { getPackProps, listPackIds } from "@/lib/packs.server";

// The DOM chrome is rendered by _app, which keeps it mounted across pack
// switches; the page only contributes the scene contents and remembers the
// visit for the sidebar's "Recently viewed" list. "/" does not record, so the
// default pack does not crowd out real history on every return visit.
export default function Page({ id }: { id: Ids }) {
  useEffect(() => {
    recordRecentPack(id);
  }, [id]);

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
