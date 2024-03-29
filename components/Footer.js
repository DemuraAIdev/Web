import Link from "./Link";
import siteMetadata from "@/data/siteMetadata";
import footerLinks from "@/data/footerLinks";
import { Other } from "@/data/footerLinks";
import { SocialLink } from "@/data/footerLinks";
import NowPlaying from "@/components/nplaying";
import LangSwitch from "./LangSwitch";
export default function Footer() {
  return (
    <footer className="mt-10">
      <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
      <div className="mb-10">
        <NowPlaying />
      </div>
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          {footerLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className=" text-black transition hover:text-primary-400 dark:text-zinc-400 dark:hover:text-primary-400"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          {Other.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className=" text-black transition hover:text-primary-400 dark:text-zinc-400 dark:hover:text-primary-400"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col space-y-4 ">
          {SocialLink.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className=" text-black transition hover:text-primary-400 dark:text-zinc-400 dark:hover:text-primary-400"
            >
              {link.title}
            </Link>
          ))}
          <LangSwitch />
        </div>
      </div>
      <div className="mb-9 flex space-x-2 text-sm text-black dark:text-gray-400">
        <div>{siteMetadata.author}</div>
        <div>{` • `}</div>
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
        <Link href="/">{siteMetadata.title}</Link>
        <span className="black ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none dark:bg-zinc-800 dark:text-zinc-400">
          3.0
        </span>
      </div>
    </footer>
  );
}
