import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import Button from '@components/Button'
import { useAuth } from '@contexts/AuthContext'

interface Props {
  onClickHandler?: React.MouseEventHandler<HTMLButtonElement>
}

const Header: React.FC<Props> = ({ onClickHandler }) => {
  const router = useRouter()
  const { currentUser, logout }: any = useAuth()
  let btnText: string
  let handleClick: any

  if (currentUser) {
    btnText = 'Sign Out'
    handleClick = () => {
      logout()
      router.push('/')
    }
  } else {
    btnText = 'Sign In'
    handleClick = onClickHandler
  }

  return (
    <div className="flex items-center justify-between w-full h-24 px-8 py-0 m-0 ">
      <a href="">
        <img src="/images/netflix_logo.png" alt="Logo" className="w-28" />
      </a>
      <div className="flex items-center">
        <div className="flex items-center mr-6 gap-4">
          <Link href="/profile">
            <img
              className="w-10 h-10 p-1 bg-white rounded-full cursor-pointer"
              src="https://robohash.org/fc820f57e89efed29b5d3505f7c5911c?set=set4&bgset=&size=400x400"
              alt="Profile"
            />
          </Link>
          <p className="text-xl text-white">{currentUser.displayName}</p>
        </div>
        <Button onClick={handleClick} styles="max-w-24">
          {btnText}
        </Button>
      </div>
    </div>
  )
}

export default Header
