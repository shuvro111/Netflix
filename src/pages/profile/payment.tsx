import React from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

import StripeForm from '@components/StripeForm'

const Payment = () => {
  const { query }: any = useRouter()
  const priceList: object = {
    basic: 16.25,
    standard: 26.0,
    premium: 36.0,
  }
  const price = priceList[`${query.plan}`]

  return (
    <>
      <Head>
        <title>Netflix Bangladesh - Payment</title>

        <meta
          name="description"
          content="A Netflix Clone, built with Nextjs, TailwindCSS, Firebase and coded by Shuvro Sarkar"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-wrap">
        <div className="flex flex-col items-center w-full h-full p-8 text-white bg-red-600 md:w-1/2 md:h-screen">
          <h2 className="my-2 mt-10 text-xl border-b">
            Subscribe to {query.plan}
          </h2>
          <h1 className="text-2xl font-semibold">
            ${price.toFixed(2)} / month
          </h1>
        </div>
        <div className="w-full md:w-1/2">
          <StripeForm />
        </div>
      </div>
    </>
  )
}

export default Payment
