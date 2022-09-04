import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import footerLinks from '@/data/footerLinks'

export default function Footer() {
  return (
    <footer>
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          {footerLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className=" rounded-lg p-1 font-medium text-gray-700 transition-all hover:bg-gray-200 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white sm:px-3 sm:py-2 md:inline-block"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
