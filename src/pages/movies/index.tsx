import React from 'react'

import { GetStaticProps } from 'next'
import Head from 'next/head'

import Banner from '@components/Banner'
import Hero from '@containers/Hero'
import MovieContainer from '@containers/MovieContainer'
import { useAuth } from '@contexts/AuthContext'
import axios from '@Utils/axios'
import requests from '@Utils/requests'
export default function Home({ results }) {
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

      {!currentUser ? (
        <Hero />
      ) : (
        <>
          <Banner />
          {results.map(({ genre, movies }) => (
            <MovieContainer key={genre} genre={genre} movies={movies} />
          ))}
        </>
      )}
      {/* Hero */}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let results: Array<any> = []
  await Promise.all(
    Object.values(requests).map(async ({ title, url }) => {
      const movies = await axios.get(url)
      const result = {
        genre: title,
        movies: movies.data.results,
      }
      results.push(result)
    })
  )

  return {
    props: {
      results,
    },
    revalidate: 1,
  }
}
