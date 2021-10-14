import React from 'react'

import Link from 'next/link'

interface Props {
  result: any
  id: number
}

const Thumbnail: React.FC<Props> = ({ result, id }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original'
  return (
    <>
      <Link href={`/movies/${id}`}>
        <img
          className="my-4 overflow-hidden cursor-pointer transition-all ease-in transform hover:scale-105"
          src={`${baseUrl}${result.poster_path}`}
          alt="Thumbnail"
        />
      </Link>
      <h3 className="font-bold text-center text-white text-md">
        {result?.title || result?.name || result?.originalName}
      </h3>
    </>
  )
}

export default Thumbnail
