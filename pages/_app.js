import '@/css/tailwind.css'
import '@/css/prism.css'
import '@/css/twemoji.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import React from 'react'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Router from 'next/router'
import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import NProgress from 'nprogress'
import '@/css/nprogress.css'
import { SessionProvider } from 'next-auth/react'
import CBb from '@/components/cb'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

NProgress.configure({ showSpinner: false, trickle: false, easing: 'ease' })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        {isDevelopment && isSocket && <ClientReload />}
        <Analytics />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </SessionProvider>
  )
}
