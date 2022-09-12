/* eslint-disable prettier/prettier */
import { ClientSafeProvider, signIn } from 'next-auth/react'
import Google from './google.svg'
import GoogleDark from './google-dark.svg'
import Github from './github.svg'
import GithubDark from './github-dark.svg'
import Discord from './discord.svg'
import DiscordDark from './discord-dark.svg'
import { useDarkTheme } from '@/lib/useDarkTheme'
import { useRouter } from 'next/router'

const providerStyleGuides = {
  github: {
    Logo: Github,
    LogoDark: GithubDark,
    bg: 'bg-black',
    bgDark: 'bg-white',
    text: 'text-white',
    textDark: 'text-black',
  },
  discord: {
    Logo: Discord,
    LogoDark: DiscordDark,
    bg: 'bg-black',
    bgDark: 'bg-white',
    text: 'text-white',
    textDark: 'text-black',
  },
  google: {
    Logo: Google,
    LogoDark: GoogleDark,
    bgDark: 'bg-[#4285F4]',
    bg: 'bg-white',
    text: 'text-black',
    textDark: 'text-white',
  },
}

export default function LoginButton({ provider }) {
  const [isDark, mounted] = useDarkTheme()
  const { Logo, LogoDark, bg, bgDark, text, textDark } = providerStyleGuides[provider.id]
  const router = useRouter()
  const { callbackUrl } = router.query
  if (!mounted) return null
  return (
    <div key={provider.name}>
      <button
        className={`focus:shadow-outline-primary flex h-12 w-56 items-center gap-3 rounded-lg border border-transparent text-sm font-medium leading-5 shadow transition-colors duration-150 focus:outline-none
         ${isDark && bgDark ? bgDark : bg}
         ${isDark && textDark ? textDark : text} `}
        onClick={() => signIn(provider.id, { callbackUrl: callbackUrl })}
      >
        {isDark && LogoDark ? <LogoDark className="h-full p-2" /> : <Logo className="h-full p-2" />}
        Sign in with {provider.name}
      </button>
    </div>
  )
}
