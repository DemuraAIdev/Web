/* eslint-disable prettier/prettier */
import { signIn, signOut, useSession } from 'next-auth/react'
import CustomLink from './Link'
import { useState } from 'react'
import LoadingSpinner from './LoadingSpinner'
export default function GuestbookEntry({ message }) {
  const { data: session } = useSession()
  const [isLoading, setIsLoading] = useState()
  const onSignIn = async () => {
    setIsLoading(true)
    await signIn()
    setIsLoading(false)
  }

  return (
    <div>
      <h5 className="text-lg font-bold text-gray-900 dark:text-gray-100 md:text-xl">
        Sign the Guestbook
      </h5>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Share a message for a future visitor of my site.
      </p>
      {session?.user ? (
        // eslint-disable-next-line @next/next/no-html-link-for-pages
        <div>
          Logged in as <strong>{session.user.name}.</strong>{' '}
          <CustomLink
            className="font-semibold"
            href="/api/auth/signout"
            onClick={async (e) => {
              e.preventDefault()
              setIsLoading(true)
              await signOut()
              setIsLoading(false)
            }}
          >
            Log out
          </CustomLink>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-html-link-for-pages
        <button
          className="my-4 flex h-8 w-28 items-center justify-center rounded bg-gray-200 font-bold text-gray-900 dark:bg-gray-700 dark:text-gray-100"
          onClick={onSignIn}
        >
          {isLoading ? <LoadingSpinner /> : 'Login'}
        </button>
      )}
    </div>
  )
}
