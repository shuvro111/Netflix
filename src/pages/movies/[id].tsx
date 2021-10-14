import React from 'react'

import { GetStaticProps } from 'next'
import Head from 'next/head'

import MovieDetails from '@components/MovieDetails'
import Hero from '@containers/Hero'
import { useAuth } from '@contexts/AuthContext'
import axios from '@Utils/axios'
import requests, { MovieById } from '@Utils/requests'
export default function Home({ movie, casts }) {
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
          <MovieDetails movie={movie} casts={casts} />
        </>
      )}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id

  const movie = await (await axios.get(MovieById.fetchMovieByid(id))).data
  const casts = await (
    await axios.get(MovieById.fetchMovieCredits(id))
  ).data.cast
  return {
    props: {
      movie,
      casts,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = []

  await Promise.all(
    Object.values(requests).map(async ({ url }) => {
      const result = await axios.get(url)
      const movies = result.data.results
      movies.map((movie) => {
        const path = {
          params: {
            id: movie.id.toString(),
          },
        }
        paths.push(path)
      })
    })
  )

  return {
    paths,
    fallback: false,
  }
}
