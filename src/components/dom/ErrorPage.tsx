import Head from "next/head";
import Link from "next/link";

interface ErrorPageProps {
  code: number;
  heading: string;
  message: string;
}

export function ErrorPage({ code, heading, message }: ErrorPageProps) {
  return (
    <>
      <Head>
        <title>{`${code} ${heading} – Quaternius Showcase`}</title>
      </Head>
      <div className="fixed inset-0 z-[2000] overflow-y-auto bg-leva-dark text-leva-white font-leva p-8">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm opacity-70 mb-6">Quaternius Showcase</p>

          <h1 className="text-3xl font-bold mb-6">
            {code} – {heading}
          </h1>

          <p className="text-sm leading-relaxed opacity-80 mb-6">{message}</p>

          <p>
            <Link href="/" className="text-yellow-400 hover:underline text-sm">
              &larr; Back to Showcase
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
