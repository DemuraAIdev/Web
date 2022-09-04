import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import External from '@/components/social-icons/external.svg'
import footerLinks from '@/data/footerLinks'
import { Other } from '@/data/footerLinks'
import { SocialLink } from '@/data/footerLinks'

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          {footerLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className=" text-gray-500 transition hover:text-gray-600"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          {Other.map((link) => (
            <Link
              key={link.title}
              d
              href={link.href}
              className=" text-gray-500 transition hover:text-gray-600"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          {SocialLink.map((link) => (
            <Link
              key={link.title}
              d
              href={link.href}
              className=" text-gray-500 transition hover:text-gray-600"
            >
              {link.title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="ml-0.5 inline-block h-4 w-4 fill-current"
              >
                <g data-name="Layer 2">
                  <g data-name="external-link">
                    <rect width="24" height="24" opacity="0"></rect>
                    <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"></path>
                    <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"></path>
                  </g>
                </g>
              </svg>
            </Link>
          ))}
        </div>
      </div>
      <div className="mb-9 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>{siteMetadata.author}</div>
        <div>{` • `}</div>
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
        <Link href="/">{siteMetadata.title}</Link>
      </div>
    </footer>
  )
}
