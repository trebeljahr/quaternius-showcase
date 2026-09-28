import type { GetStaticPropsContext } from "next";
import { type Ids, Out, PackViewer } from "@/components/canvas/PackViewer";
import { getPackProps, listPackIds } from "@/lib/packs.server";

export default function Page() {
  return <Out />;
}

Page.canvas = (props: { id: Ids }) => {
  return <PackViewer {...props} />;
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
