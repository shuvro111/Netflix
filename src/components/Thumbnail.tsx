import React from 'react'

interface Props {
  result: any
}

const Thumbnail: React.FC<Props> = ({ result }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original'
  return (
    <>
      <img
        className="my-4 overflow-hidden cursor-pointer transition-all ease-in transform hover:scale-105"
        src={`${baseUrl}${result.poster_path}`}
        alt="Thumbnail"
      />
      <h3 className="font-bold text-center text-white text-md">
        {result?.title || result?.name || result?.originalName}
      </h3>
    </>
  )
}

export default Thumbnail
