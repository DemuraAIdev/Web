/* eslint-disable prettier/prettier */
import LoginButton from '@/components/LoginButton'
import PageTitle from '@/components/PageTitle'
import { getProviders } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function SignIn({ providers }) {
  return (
    <>
      <PageSEO
        title={`Sign In - ${siteMetadata.author}`}
        description={`Sign In - ${siteMetadata.author}`}
      />
      <div className="space-y-2 pt-6 pb-4 md:space-y-5">
        <PageTitle>Sign In</PageTitle>
      </div>
      <div className="flex flex-col items-center justify-items-center space-y-2 xl:space-y-0">
        <div className="prose max-w-none p-8 dark:prose-dark">
          <div className="flex flex-col items-center justify-between gap-4">
            <p className="text-center sm:text-left">
              Sign in to access guestbook features and more
            </p>
            {providers &&
              Object.values(providers).map((provider) => {
                return <LoginButton key={provider.id} provider={provider} />
              })}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
