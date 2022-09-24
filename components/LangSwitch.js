/* eslint-disable prettier/prettier */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import setLanguage from 'next-translate/setLanguage'
import Link from './Link'

const LangSwitch = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 bg-zinc-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            <button className='bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 block px-4 py-2 text-sm' onClick={async () => await setLanguage('id')}>ID</button>
                        </Menu.Item>
                        <Menu.Item>
                            <button className='bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 block px-4 py-2 text-sm' onClick={async () => await setLanguage('en')}>EN</button>
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default LangSwitch
