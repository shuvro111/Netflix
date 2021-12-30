import React from 'react'

import Link from 'next/link'
import { RiNetflixFill } from 'react-icons/ri'

import Button from './Button'
interface Props {
  type: string
  quality: string
  active
}

const Package: React.FC<Props> = ({ type, quality, active }) => {
  return (
    <div className="relative flex flex-col items-center justify-center max-w-full p-4 rounded shadow-lg h-80 w-60 bg-netflix-darkred">
      <RiNetflixFill className="text-6xl text-indigo-50" />
      <div className="my-10 text-center text-white capitalize">
        <p className="text-2xl font-bold">{type}</p>
        <p className="text-lg">{quality}</p>
      </div>
      {active ? (
        <p className="absolute bottom-0 w-full px-4 text-lg font-bold text-center text-white bg-gray-800 rounded py-7">
          Active
        </p>
      ) : (
        <Link href={`profile/payment?plan=${type}`}>
          <Button
            type="button"
            styles="bg-gray-200 hover:bg-gray-100 duration-200 text-black"
          >
            Choose Plan
          </Button>
        </Link>
      )}
    </div>
  )
}

export default Package
