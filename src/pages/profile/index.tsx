import React from 'react'

import Head from 'next/head'

import Header from '@components/Header'
import Packages from '@components/Packages'
import { useAuth } from '@contexts/AuthContext'

const EditProfile = () => {
  const { currentUser }: any = useAuth()
  return (
    <div className="w-full h-screen bg-black">
      <Head>
        <title>Netflix Bangladesh - Edit Profile</title>

        <meta
          name="description"
          content="A Netflix Clone, built with Nextjs, TailwindCSS, Firebase and coded by Shuvro Sarkar"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      {currentUser && (
        <>
          <Header />
          <div className="flex flex-col items-center mt-10 text-gray-300">
            <h1 className="text-4xl font-bold ">Edit Profile </h1>
            <p className="p-4 mt-8 bg-gray-900">Email: {currentUser.email}</p>
          </div>
          <Packages currentPackage="" />
        </>
      )}
    </div>
  )
}

export default EditProfile
