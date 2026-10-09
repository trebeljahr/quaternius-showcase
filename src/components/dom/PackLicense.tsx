import type { Ids } from "@/components/PackViewerProvider";
import { getPackLicense } from "@/lib/licenses";
import { formatPackName } from "@/lib/seo";

/**
 * The current pack's name, linked to its quaternius.com page, with a small
 * badge for its license (e.g. "CC0") linked to the license text.
 */
export function PackLicense({ id }: { id: Ids }) {
  const license = getPackLicense(id);

  return (
    <p className="mb-2 flex items-center gap-2 text-leva-light-grey">
      <a
        className="hover:underline hover:decoration-solid"
        href={license.source}
        target="_blank"
        rel="noopener noreferrer"
        title={`${license.packName} on quaternius.com`}
      >
        {formatPackName(id)}
      </a>
      <a
        className="rounded border border-yellow-400 px-1 text-xs leading-4 text-yellow-400 hover:bg-yellow-400 hover:text-leva-dark"
        href={license.url}
        target="_blank"
        rel="noopener noreferrer"
        title={`Licensed under ${license.name}`}
      >
        {license.label}
      </a>
    </p>
  );
}
