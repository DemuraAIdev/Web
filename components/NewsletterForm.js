import { useRef, useState } from 'react'

import siteMetadata from '@/data/siteMetadata'

const NewsletterForm = ({ title = 'Subscribe to the newsletter' }) => {
  const inputEl = useRef(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/${siteMetadata.newsletter.provider}`, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      console.log(error)
      setError(true)
      setMessage('Your e-mail address is invalid or you are already subscribed!')
      return
    }

    inputEl.current.value = ''
    setError(false)
    setSubscribed(true)
    setMessage('Successfully! 🎉 You are now subscribed.')
  }

  return (
    <div>
      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</div>
      <form className="relative my-4" onSubmit={subscribe}>
        <label className="sr-only" htmlFor="email-input">
          Email address
        </label>
        <input
          autoComplete="email"
          className="mt-1 block w-full rounded-md bg-white px-4 py-2 pr-32 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
          id="email-input"
          name="email"
          placeholder={subscribed ? "You're subscribed !  🎉" : 'Enter your email'}
          ref={inputEl}
          required
          type="email"
          disabled={subscribed}
        />
        <button
          className={`absolute right-1 top-1 flex h-8 w-28 items-center justify-center rounded bg-gray-100 px-4 pt-1 font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-100`}
          type="submit"
          disabled={subscribed}
        >
          {subscribed ? 'Thanks!' : 'Sign up'}
        </button>
      </form>
      {error && (
        <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">{message}</div>
      )}
    </div>
  )
}

export default NewsletterForm

export const BlogNewsletterForm = ({ title }) => (
  <div className="dark:bg-blue-opaque my-4 w-full rounded border border-blue-200 bg-blue-50 p-6  shadow-xl transition dark:border-gray-800 dark:bg-black dark:shadow-none">
    <NewsletterForm title={title} />
  </div>
)
