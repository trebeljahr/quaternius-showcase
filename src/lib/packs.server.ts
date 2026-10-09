import { listPackIds, readModelUrls } from "@/lib/modelUrls.server";
import { getPackSeo } from "@/lib/seo";

export { listPackIds };

export async function getPackProps(id: string) {
  const modelUrls = await readModelUrls(id);

  return { id, modelUrls, ...getPackSeo(id, Object.keys(modelUrls).length) };
}
