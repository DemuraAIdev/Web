import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <div className="z-50 flex h-screen flex-col justify-between">
        <header className="firefox:bg-opacity-100 dark:firefox:bg-opacity-100 fixed top-0 z-20 flex w-full items-center  justify-between bg-white bg-opacity-30 py-4 backdrop-blur-lg backdrop-saturate-150 backdrop-filter  dark:bg-black dark:bg-opacity-30 ">
          <nav className="mx-auto flex w-full max-w-md items-center justify-between px-4 sm:px-4 sm:py-2 md:max-w-2xl md:px-0 xl:max-w-2xl xl:px-0">
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block sm:space-x-8">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="link-underline dark:link-underline-black rounded-t-lg p-1 font-medium text-gray-700 transition-all hover:bg-gray-200 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white sm:px-3 sm:py-2 md:inline-block"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <ThemeSwitch />
            </div>
            <MobileNav />
          </nav>
        </header>
        <SectionContainer>
          <main className="mb-auto mt-20">{children}</main>
          <Footer />
        </SectionContainer>
      </div>
      <div
        id="dropdownInformation"
        className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
      >
        <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
          <div>Bonnie Green</div>
          <div className="truncate font-medium">name@flowbite.com</div>
        </div>
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformationButton"
        >
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
        </ul>
        <div className="py-1">
          <a
            href="#"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Sign out
          </a>
        </div>
      </div>
    </>
  )
}

export default LayoutWrapper
