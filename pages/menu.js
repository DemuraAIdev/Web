import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import Link from "@/components/Link";

export async function getStaticProps({ locale, locales }) {
  return { props: { locale, availableLocales: locales } };
}

export default function Newsletter({ locale, availableLocales }) {
  return (
    <>
      <PageSEO
        title={`Menu - ${siteMetadata.title}`}
        description={"Navigation to My Website"}
        availableLocales={availableLocales}
      />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Navigation
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Map to my website
          </p>
        </div>
        <h3 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          Internal Pages
        </h3>
        <ul className="list-inside list-disc">
          <li>
            <Link className={"bg-cust1"} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={"bg-cust1"} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={"bg-cust1"} href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className={"bg-cust1"} href="/newsletter">
              Newsletter
            </Link>
          </li>
          <li>
            <Link className={"bg-cust1"} href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className={"bg-cust1"} href="/guestbook">
              Guestbook
            </Link>
          </li>
          <li>
            <Link className={"bg-cust1"} href="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link className={"bg-cust1"} href="/tags">
              Tags
            </Link>
          </li>
          <li>
            <Link className={"bg-cust1"} href="/anime">
              Anime
            </Link>
          </li>
        </ul>
        <br></br>
        <h3 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          External Pages
        </h3>
        <ul className="list-inside list-disc">
          <li>
            <Link
              className={"bg-cust1"}
              href="https://bin.vahryiskandar.my.id/"
            >
              Bin
            </Link>
          </li>
          <li>
            <Link
              className={"bg-cust1"}
              href="https://uptime.vahryiskandar.my.id/"
            >
              Uptime
            </Link>
          </li>
          <li>
            <Link
              className={"bg-cust1"}
              href="https://umami.vahryiskandar.my.id/share/LNdNPeZv/Utma"
            >
              Analytics
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
