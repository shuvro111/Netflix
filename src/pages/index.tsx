import React from 'react'

import Head from 'next/head'

import Header from '@components/Header'
import Hero from '@containers/Hero'
import { useAuth } from '@contexts/AuthContext'

export default function Home() {
  const { currentUser }: any = useAuth()

  return (
    <div>
      <Head>
        <title>
          Netflix Bangladesh - Watch TV Shows Online, Watch Movies Online
        </title>

        <meta
          name="description"
          content="A Netflix Clone, built with Nextjs, TailwindCSS, Firebase and coded by Shuvro Sarkar"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      {!currentUser ? (
        <Hero />
      ) : (
        <>
          <Header onClickHandler={() => null} />
          <h1>Welcome {currentUser.displayName} to the dashboard</h1>
        </>
      )}
      {/* Hero */}
    </div>
  )
}
