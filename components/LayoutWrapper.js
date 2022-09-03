import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <header className="firefox:bg-opacity-100 dark:firefox:bg-opacity-100 sticky top-0 z-20 flex w-full items-center  justify-between border-b border-gray-200 bg-white bg-opacity-30 py-4 backdrop-blur-lg backdrop-saturate-150 backdrop-filter dark:border-gray-800 dark:bg-black dark:bg-opacity-30">
        <nav className="mx-auto flex w-full max-w-2xl items-center justify-between px-4 sm:px-6 sm:py-2 xl:max-w-3xl xl:px-0">
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block sm:space-x-8">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="font-medium text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </nav>
      </header>
      <SectionContainer>
        <main className="mb-auto">{children}</main>
        <Footer />
      </SectionContainer>
    </div>
  )
}

export default LayoutWrapper
