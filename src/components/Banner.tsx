import React, { CSSProperties, useEffect, useState } from 'react'

import { BsPlay } from 'react-icons/bs'

import Button from '@components/Button'
import Header from '@components/Header'
import axios from '@Utils/axios'
import requests from '@Utils/requests'

const Banner = () => {
  const [movie, setMovie] = useState([])

  const fetchData = async () => {
    const request = await axios.get(requests.fetchActionMovies.url)
    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]
    )
    return request
  }
  useEffect(() => {
    fetchData().then((res) => console.log(res.data.results[0]))
  }, [])

  const backgroundStyles: CSSProperties = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
    height: '50vh',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    backgroundBlendMode: 'multiply',
  }

  return (
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
  )
}

export default Banner