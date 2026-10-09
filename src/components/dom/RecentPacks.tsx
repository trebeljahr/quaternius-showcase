import Link from "next/link";
import type { Ids } from "@/components/PackViewerProvider";
import { useRecentPacks } from "@/hooks/useRecentPacks";
import { formatPackName } from "@/lib/seo";

/**
 * Packs this browser opened before, so a returning visitor can jump straight
 * back. The pack on screen is left out: the full list below already marks it.
 */
export function RecentPacks({ currentId }: { currentId: Ids | undefined }) {
  const recentPacks = useRecentPacks().filter((id) => id !== currentId);
  if (recentPacks.length === 0) return null;

  return (
    <nav aria-label="Recently viewed packs" className="mb-3 border-b border-leva-medium pb-2">
      <h2 className="mb-1 text-leva-light-grey">Recently viewed</h2>
      {recentPacks.map((id) => (
        <div key={id} className="hover:text-leva-light-grey hover:underline hover:decoration-solid">
          <Link href={`/${id}`}>{formatPackName(id)}</Link>
        </div>
      ))}
    </nav>
  );
}
