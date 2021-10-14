import React from 'react'

import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import Thumbnail from '@components/Thumbnail'

interface Props {
  genre: any
  movies: any
}

const MovieContainer: React.FC<Props> = ({ genre, movies }) => {
  return (
    <div className="p-10 bg-netflix-black">
      <h1 className="text-2xl font-bold text-white">{genre}</h1>
      <Swiper
        spaceBetween={15}
        slidesPerView={8.5}
        navigation
        modules={[Navigation]}
        loop={true}
        autoplay={true}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Thumbnail result={movie} id={movie.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieContainer

//86400
