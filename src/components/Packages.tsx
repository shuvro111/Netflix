import React from 'react'

import Package from '@components/Package'

interface Props {
  currentPackage?: string
}

const Packages: React.FC<Props> = ({ currentPackage }) => {
  return (
    <>
      {(!currentPackage || currentPackage === '') && (
        <div>
          <h1 className="mt-10 text-3xl font-bold text-center text-gray-300">
            You are not subscribed to any package yet
          </h1>
        </div>
      )}
      <h1 className="my-10 text-2xl font-bold text-center text-white">
        Our Packages
      </h1>
      <div className="flex justify-center w-full gap-6">
        <Package
          type="basic"
          quality="720p"
          active={currentPackage === 'basic'}
        />
        <Package
          type="standard"
          quality="1080p"
          active={currentPackage === 'standard'}
        />
        <Package
          type="premium"
          quality="4k+HDR"
          active={currentPackage === 'premium'}
        />
      </div>
    </>
  )
}

export default Packages
