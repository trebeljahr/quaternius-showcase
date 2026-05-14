import Head from "next/head";
import Link from "next/link";

export default function ImprintPage() {
  return (
    <>
      <Head>
        <title>Imprint – Quaternius Showcase</title>
      </Head>
      <div className="fixed inset-0 z-[2000] overflow-y-auto bg-leva-dark text-leva-white font-leva p-8">
        <div className="max-w-2xl mx-auto">
          <p className="mb-6">
            <Link href="/" className="text-yellow-400 hover:underline text-sm">
              &larr; Back to Showcase
            </Link>
          </p>

          <h1 className="text-3xl font-bold mb-6">Imprint</h1>

          <p className="text-sm opacity-70 mb-6">
            Information pursuant to § 5 DDG (German Digital Services Act) and § 18 (2) MStV
            (Interstate Media Treaty).
          </p>

          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-1">Service Provider</h2>
            <p className="text-sm leading-relaxed opacity-80">
              Rico Trebeljahr
              <br />
              c/o Block Services
              <br />
              Stuttgarter Str. 106
              <br />
              70736 Fellbach
              <br />
              Germany
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-1">Contact</h2>
            <p className="text-sm opacity-80">
              Email:{" "}
              <a
                href="mailto:imprint+quaternius@trebeljahr.com"
                className="text-yellow-400 hover:underline"
              >
                imprint+quaternius@trebeljahr.com
              </a>
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-1">
              Person Responsible for Content (§ 18 (2) MStV)
            </h2>
            <p className="text-sm leading-relaxed opacity-80">
              Rico Trebeljahr
              <br />
              c/o Block Services
              <br />
              Stuttgarter Str. 106
              <br />
              70736 Fellbach
              <br />
              Germany
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-1">3D Models</h2>
            <p className="text-sm leading-relaxed opacity-80">
              3D models used on this site are by{" "}
              <a
                href="https://quaternius.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline"
              >
                Quaternius
              </a>
              , licensed under CC0 1.0 Universal (Public Domain).
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-1">Liability for Content</h2>
            <p className="text-sm leading-relaxed opacity-80">
              As a service provider, I am responsible for my own content on these pages in
              accordance with § 7 (1) DDG and general laws. However, pursuant to §§ 8 to 10 DDG, I
              am not obligated as a service provider to monitor transmitted or stored third-party
              information.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-1">Liability for Links</h2>
            <p className="text-sm leading-relaxed opacity-80">
              This site contains links to external websites of third parties over whose content I
              have no influence.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-1">Copyright</h2>
            <p className="text-sm leading-relaxed opacity-80">
              The content and works created by the site operator on these pages are subject to
              German copyright law.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
