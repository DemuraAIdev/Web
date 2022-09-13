/* eslint-disable prettier/prettier */
import { signIn } from 'next-auth/react'
import GoogleDark from './google-dark.svg'
import GithubDark from './github-dark.svg'
import DiscordDark from './discord-dark.svg'
import { useRouter } from 'next/router'

const providerStyleGuides = {
  github: {
    Logo: GithubDark,
    bg: 'bg-white',
    text: 'text-black',
  },
  discord: {
    Logo: DiscordDark,
    bg: 'bg-white',
    text: 'text-black',
  },
  google: {
    Logo: GoogleDark,
    bg: 'bg-[#4285F4]',
    text: 'text-white',
  },
}

export default function LoginButton({ provider }) {
  const { Logo, bg, text } = providerStyleGuides[provider.id]
  const router = useRouter()
  const { callbackUrl } = router.query
  return (
    <div key={provider.name}>
      <button
        className={`focus:shadow-outline-primary flex h-12 w-56 items-center gap-3 rounded-lg border border-transparent text-sm font-medium leading-5 shadow transition-colors duration-150 focus:outline-none
         ${bg}
         ${text} `}
        onClick={() => signIn(provider.id, { callbackUrl: callbackUrl })}
      >
        {<Logo className="h-full p-2" />}
        Sign in with {provider.name}
      </button>
    </div>
  )
}
