import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import footerLinks from '@/data/footerLinks'
import { Other } from '@/data/footerLinks'

export default function Footer() {
  return (
    <footer>
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
