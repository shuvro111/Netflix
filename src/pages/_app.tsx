import React from 'react'

import { AppProps } from 'next/app'

import '../styles/tailwind.css'
import { AuthProvider } from '@contexts/AuthContext'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
