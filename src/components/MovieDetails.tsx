import React, { CSSProperties, useState } from 'react'

import { BsPlay } from 'react-icons/bs'

import Button from '@components/Button'
import Header from '@components/Header'
import TrailerContainer from '@components/TrailerContainer'
import axios from '@Utils/axios'
import { MovieById } from '@Utils/requests'

interface Props {
  movie: any
  casts: any
}

const MovieDetails: React.FC<Props> = ({ movie, casts }) => {
  const [trailerKey, setTrailerKey] = useState('')
  const [trailerVisible, setTrailerVisible] = useState(true)

  const playTrailer = async (movieId) => {
    const url = await axios.get(MovieById.fetchMovieTrailerByid(movieId))
    const key = url.data.results[0].key
    setTrailerKey(key)
    setTrailerVisible(true)
  }

  const closeTrailerHandler = () => {
    setTrailerVisible(false)
  }

  const backgroundStyles: CSSProperties = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
    minHeight: '50vh',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    backgroundBlendMode: 'multiply',
    height: '100%',
    padding: '0rem 0rem 5rem 0rem',
  }

  return (
    <>
      <div style={backgroundStyles}>
        <Header onClickHandler={() => null} />
        <div className="mx-8 mt-20">
          <h3 className="text-6xl font-bold text-white">
            {movie?.title || movie?.name || movie?.originalName}
          </h3>
          <div className="flex my-8 gap-4">
            <Button
              styles="shadow-2xl rounded"
              rightIcon={
                <BsPlay className="ml-1 text-lg font-bold text-white stroke-1" />
              }
              onClick={() => {
                playTrailer(movie.id)
              }}
            >
              Play
            </Button>
            <Button styles="bg-netflix-gray duration-150 ease-linear transition-all shadow-2xl rounded hover:bg-white hover:text-black">
              My list
            </Button>
          </div>
          <p className="w-full lg:w-2/3 text-netflix-white">{movie.overview}</p>
        </div>
      </div>
      {trailerKey && trailerVisible && (
        <TrailerContainer
          trailerKey={trailerKey}
          closeTrailerHandler={closeTrailerHandler}
        />
      )}

      <div className="p-10 bg-gray-900">
        <h1 className="text-xl font-bold text-white">Casts</h1>
        <div className="flex flex-wrap items-center justify-start w-full my-4 overflow-hidden gap-4">
          {casts.map((cast, index) => {
            if (index < 5) {
              return (
                <div className="w-36 h-36">
                  <img
                    className="object-cover w-20 h-20 rounded-full"
                    src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                    alt=""
                  />
                  <p className="mt-4 text-sm text-white truncate">
                    {cast.original_name}
                  </p>
                </div>
              )
            }
          })}
        </div>
      </div>
    </>
  )
}

export default MovieDetails
