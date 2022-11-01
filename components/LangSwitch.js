import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import setLanguage from 'next-translate/setLanguage'

const LangSwitch = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="text-gray-400 transition hover:text-primary-400">
          Language
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-zinc-100 text-zinc-500 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-zinc-800 dark:text-zinc-400">
          <div className="py-1">
            <Menu.Item>
              <button
                className="block bg-zinc-100 px-4 py-2 text-sm text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                onClick={async () => await setLanguage('id')}
              >
                ID
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                className="block bg-zinc-100 px-4 py-2 text-sm text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                onClick={async () => await setLanguage('en')}
              >
                EN
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default LangSwitch
