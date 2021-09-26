import React from 'react'

import { HiX } from 'react-icons/hi'

interface Props {
  trailerKey: string
  closeTrailerHandler: React.MouseEventHandler<SVGElement>
}

const TrailerContainer: React.FC<Props> = ({
  trailerKey,
  closeTrailerHandler,
}) => {
  return (
    <>
      <div className="fixed p-10 pt-6 top-10 left-1/4 bg-netflix-black">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Trailer</h1>
          <HiX
            className=" text-xl cursor-pointer text-netflix-white"
            onClick={closeTrailerHandler}
          />
        </div>
        <iframe
          className="mt-5"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  )
}

export default TrailerContainer
