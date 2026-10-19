import Link from "next/link";
import type { ReactNode } from "react";

// This page and the site must agree. A new request to a host that is not listed
// under "Servers your browser contacts", or a new key in the browser's storage,
// updates this page and UPDATED_ON in the same change. Scan the built site for
// every host and storage key before you edit the lists.
const UPDATED_ON = "October 19, 2026";

const PRIVACY_ADDRESS = "imprint+quaternius@trebeljahr.com";

const linkStyle = "text-yellow-400 hover:underline";
const textStyle = "text-sm leading-relaxed opacity-80";
const listStyle = "list-disc space-y-2 pl-5";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className={textStyle}>{children}</p>;
}

function Host({ children }: { children: ReactNode }) {
  return <code className="rounded-sm bg-white/10 px-1 text-leva-white">{children}</code>;
}

function External({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkStyle}>
      {children}
    </a>
  );
}

function Mail() {
  return (
    <a href={`mailto:${PRIVACY_ADDRESS}`} className={linkStyle}>
      {PRIVACY_ADDRESS}
    </a>
  );
}

export default function PrivacyPage() {
  return (
    <div className="fixed inset-0 z-[2000] overflow-y-auto select-text bg-leva-dark text-leva-white font-leva p-8">
      <div className="max-w-2xl mx-auto">
        <p className="mb-6">
          <Link href="/" className="text-yellow-400 hover:underline text-sm">
            &larr; Back to Showcase
          </Link>
        </p>

        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm opacity-70 mb-6">Last updated: {UPDATED_ON}</p>

        <p className={`${textStyle} mb-6`}>
          This page lists every server your browser contacts when you open
          quaternius.trebeljahr.com, and what each one receives. The site has no accounts, no forms
          and no newsletter. It sets no cookies.
        </p>

        <Section title="Controller">
          <P>
            The controller under the EU General Data Protection Regulation (GDPR) is the service
            provider named in the{" "}
            <Link href="/imprint" className={linkStyle}>
              imprint
            </Link>
            : Rico Trebeljahr, c/o Block Services, Stuttgarter Str. 106, 70736 Fellbach, Germany.
            Email for privacy questions: <Mail />.
          </P>
        </Section>

        <Section title="Servers your browser contacts">
          <ul className={`${listStyle} ${textStyle}`}>
            <li>
              <Host>quaternius.trebeljahr.com</Host>: the site itself, served by Cloudflare. Pages,
              scripts, the 3D models, the lighting image of the 3D scene and the icons all come from
              here.
            </li>
            <li>
              <Host>static.cloudflareinsights.com</Host>: the script of Cloudflare Web Analytics.
              Visitors in the EU, the EEA, the United Kingdom and Switzerland do not get it.
            </li>
            <li>
              <Host>plausible.trebeljahr.com</Host>: my own Plausible Analytics server.
            </li>
            <li>
              <Host>www.gstatic.com</Host>: a server of Google. Your browser contacts it only on the
              page of the Ultimate Space pack, to load the decoder for that pack&apos;s models.
            </li>
          </ul>
          <P>
            No other server receives a request from your browser. A link to another site, such as
            Quaternius, Patreon, GitHub or the GameDev Asset Library, contacts that site only when
            you click it.
          </P>
        </Section>

        <Section title="Hosting by Cloudflare">
          <P>
            The site is a set of static files. Cloudflare, Inc., 101 Townsend St, San Francisco, CA
            94107, USA, serves them from its Worker <Host>quaternius-showcase</Host>. The Worker has
            no script of its own. It only hands out the files, so no code of mine runs on a server
            when you load a page. The scripts of the site run in your browser.
          </P>
          <P>
            Cloudflare receives your IP address, the address of the page, the user agent and the
            referrer of each request. It uses them to deliver the site and to protect it against
            abuse. I do not export or keep logs of these requests.
          </P>
          <P>
            The 3D models, the lighting image and the icons are copies on quaternius.trebeljahr.com.
            The site loads no web fonts. It uses the fonts installed on your device. Your browser
            contacts no font service and no image service.
          </P>
          <P>
            Legal basis: Art. 6 (1) (f) GDPR (legitimate interest in delivering the site securely).
          </P>
        </Section>

        <Section title="Draco decoder from Google">
          <P>
            All models of the{" "}
            <Link href="/ultimate_space_pack" className={linkStyle}>
              Ultimate Space pack
            </Link>{" "}
            use Draco compression. To show them, the viewer needs a decoder. Your browser loads two
            files for it from <Host>www.gstatic.com</Host>: <Host>draco_wasm_wrapper.js</Host> and{" "}
            <Host>draco_decoder.wasm</Host>, version 1.4.3. No other pack needs them.
          </P>
          <P>
            Google receives your IP address, your user agent and the address of this site
            (https://quaternius.trebeljahr.com/) as the referrer. Your browser sends no cookie with
            the request, and Google sets none in its answer. Google marks both files as cacheable
            for one year, so your browser normally asks once. The{" "}
            <External href="https://policies.google.com/privacy">privacy policy of Google</External>{" "}
            describes what Google does with such a request.
          </P>
          <P>
            Legal basis: Art. 6 (1) (f) GDPR (legitimate interest in showing the models of this
            pack). You can object at any time, or block <Host>www.gstatic.com</Host> with a content
            blocker. The models of that pack then do not show.
          </P>
        </Section>

        <Section title="Cloudflare Web Analytics">
          <P>
            Cloudflare adds the script of{" "}
            <External href="https://developers.cloudflare.com/web-analytics/">
              Cloudflare Web Analytics
            </External>{" "}
            to each page. Your browser loads it from <Host>static.cloudflareinsights.com</Host>, and
            the script sends its report to <Host>quaternius.trebeljahr.com/cdn-cgi/rum</Host>.
          </P>
          <P>
            The report holds the page URL, the referrer and how long the page took to load. The
            timings include Largest Contentful Paint, Interaction to Next Paint and Cumulative
            Layout Shift. The report also names your browser and the version of your operating
            system. When you switch to another pack, the page does not reload, and the script sends
            a new report for the new page. Cloudflare shows me totals by page, country, browser and
            device type.
          </P>
          <P>
            The script sets no cookies and stores nothing on your device. It gives each page view a
            random ID and keeps no ID from one page view to the next. Cloudflare receives your IP
            address with the report, discards it at the nearest data center and does not store it.
          </P>
          <P>
            Cloudflare does not add the script for visitors who connect through a Cloudflare data
            center in the EU, the EEA, the United Kingdom or Switzerland. For all other visitors the
            legal basis is Art. 6 (1) (f) GDPR (legitimate interest in knowing how fast the pages
            load). You can object at any time, or block <Host>static.cloudflareinsights.com</Host>{" "}
            with a content blocker.
          </P>
        </Section>

        <Section title="Plausible Analytics">
          <P>
            I count visits with{" "}
            <External href="https://plausible.io/data-policy">Plausible Analytics</External>. It
            runs on my own server at <Host>plausible.trebeljahr.com</Host>, rented from Hetzner
            Online GmbH in Nuremberg, Germany. Requests to it pass through Cloudflare as described
            under Hosting.
          </P>
          <P>
            Your browser loads the Plausible script from <Host>plausible.trebeljahr.com</Host> and
            sends its events there. That server receives your IP address and user agent. I do not
            route these requests through quaternius.trebeljahr.com, so a content blocker can stop
            them. The site works the same without them.
          </P>
          <P>
            Plausible sets no cookies and stores nothing on your device. It combines your IP address
            and user agent with a salt that changes every day, and stores only the resulting hash.
            It deletes the salt after 24 hours, so nobody can trace the hash back to you. It never
            stores the IP address.
          </P>
          <P>
            Plausible records the page address, the referrer, the browser, the operating system, the
            device type and the country. It also records clicks on links to other sites, and it
            measures how far you scroll and how long the page has your attention. It records no
            download of a model. The script loads only on quaternius.trebeljahr.com, not on local or
            test copies of the site.
          </P>
          <P>
            The script reads one entry from your local storage, <Host>plausible_ignore</Host>. It
            lets you leave your own visits out of the count. The site never sets that entry.
          </P>
          <P>
            Legal basis: Art. 6 (1) (f) GDPR (legitimate interest in knowing which pages people
            read). You can object at any time.
          </P>
        </Section>

        <Section title="Data in your browser">
          <P>
            The site keeps the following in your browser. None of it goes to a server, and you can
            delete all of it by clearing the site data in your browser.
          </P>
          <ul className={`${listStyle} ${textStyle}`}>
            <li>
              <Host>recent-packs</Host> in local storage: the names of the last five pack pages you
              opened, newest first. The sidebar shows them under &quot;Recently viewed&quot;. The
              site writes the entry when a pack page opens, for example /dinosaurs_pack. The start
              page / does not write it. The site works the same if your browser blocks it.
            </li>
            <li>
              <Host>start-url</Host> in Cache Storage: the start page of the site, or an empty
              placeholder for it. The site also asks your browser to run a service worker (
              <Host>/sw.js</Host>). If your browser runs it, the worker adds copies of the
              site&apos;s own files to Cache Storage. It also keeps copies of files from the other
              servers listed above for up to one hour.
            </li>
          </ul>
        </Section>

        <Section title="Transfers outside the EU">
          <P>
            Cloudflare, Inc. is established in the United States. It handles each request in a data
            center of its network, normally the one nearest to you. Access by U.S. authorities under
            U.S. law cannot be fully excluded. Google, whose server you contact on the page of the
            Ultimate Space pack, is a U.S. company too. I cannot see in which of its data centers it
            handles the request. My Plausible server is in Germany.
          </P>
        </Section>

        <Section title="Storage period">
          <ul className={`${listStyle} ${textStyle}`}>
            <li>
              Cloudflare Web Analytics keeps totals by page, country, browser and device type.
              Cloudflare does not store the IP address.
            </li>
            <li>
              Your browser keeps the two decoder files from Google for up to one year, as Google
              instructs.
            </li>
            <li>The entry in your local storage stays there until you delete it.</li>
          </ul>
        </Section>

        <Section title="Your rights">
          <P>Under the GDPR you have the right to:</P>
          <ul className={`${listStyle} ${textStyle}`}>
            <li>access the personal data held about you (Art. 15);</li>
            <li>have inaccurate data corrected (Art. 16);</li>
            <li>
              have your data deleted (Art. 17), unless a legal obligation requires me to keep it;
            </li>
            <li>restrict processing (Art. 18);</li>
            <li>receive your data in a portable format (Art. 20);</li>
            <li>
              object to processing based on legitimate interest (Art. 21), which includes both kinds
              of analytics and the request to Google above.
            </li>
          </ul>
          <P>
            To use any of these rights, email <Mail />. You can also complain to a supervisory
            authority (Art. 77 GDPR). The authority responsible for me is the Landesbeauftragte für
            den Datenschutz und die Informationsfreiheit Baden-Württemberg.
          </P>
          <P>
            The site makes no automated decisions about you and builds no profile of you (Art. 22
            GDPR).
          </P>
        </Section>

        <Section title="Changes">
          <P>
            I update this page when the site starts or stops contacting a server, or changes what it
            keeps in your browser. The date at the top shows the last change.
          </P>
        </Section>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      title: "Privacy Policy – Quaternius Showcase",
      description:
        "Every server your browser contacts on quaternius.trebeljahr.com, what each one receives, what the site keeps in your browser, and your rights under the GDPR.",
      path: "/privacy",
    },
  };
};
