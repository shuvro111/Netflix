import React, { CSSProperties, useState } from 'react'

import { HiChevronRight } from 'react-icons/hi'

import Button from '@components/Button'
import Header from '@components/Header'
import InputField from '@components/InputField'

import SignUpFormContainer from './SignUpFormContainer'
const Hero = () => {
  const [formVisible, setFormVisible] = useState(false)
  const [email, setEmail] = useState('')

  const backgroundStyles: CSSProperties = {
    backgroundImage: `url("/images/hero_bg.jpg")`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    backgroundBlendMode: 'multiply',
  }

  const getStartedHandler = () => {
    setFormVisible(true)
  }

  const closeFormHandler = () => {
    setFormVisible(false)
  }

  return (
    <div style={backgroundStyles}>
      <Header onClickHandler={getStartedHandler} />
      {!formVisible && (
        <div className="flex flex-col items-center justify-center px-4 text-center mt-36 text-netflix-white">
          <h1 className="text-4xl font-black md:text-5xl lg:text-6xl ">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className="my-5 text-2xl font-bold md:text-3xl">
            Watch anywhere. Cancel anytime.
          </h2>
          <p className="text-md md:text-lg">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex flex-col items-center w-full mt-8 gap-4 md:flex-row md:justify-center">
            <InputField
              type="text"
              placeholder="Enter Your Email"
              styles="p-4 max-w-48 md:my-8"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              rightIcon={
                <HiChevronRight className="relative text-lg hover:ml-4" />
              }
              onClick={getStartedHandler}
              styles="max-w-48 py-4 md:py-4"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}

      {formVisible && (
        <SignUpFormContainer
          closeFormHandler={closeFormHandler}
          email={email}
        />
      )}
    </div>
  )
}

export default Hero
