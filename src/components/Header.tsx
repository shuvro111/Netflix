import React from 'react'

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
      <Button onClick={handleClick} styles="max-w-24">
        {btnText}
      </Button>
    </div>
  )
}

export default Header
