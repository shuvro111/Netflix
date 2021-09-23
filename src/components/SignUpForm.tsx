import React, { useState } from 'react'

import { HiX } from 'react-icons/hi'

import Button from '@components/Button'
import InputField from '@components/InputField'
import { useAuth } from '@contexts/AuthContext'

const SignUpForm = ({ closeFormHandler, email }) => {
  const [_email, setEmail] = useState(email)
  const [password, setPassword] = useState('')
  const [userName, setUserName] = useState('')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { signUp, login }: any = useAuth()

  const [isLoginForm, setIsLoginForm] = useState(true)
  let handleClick: React.FormEventHandler<HTMLFormElement>,
    primaryBtnText: string,
    altText: string,
    altBtnText: string

  const SignUpHandler = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      await signUp(_email, password, userName)
      setError('Successfully Signed In')
    } catch (error) {
      setLoading(false)
      setError('Failed to sign up')
    }
  }

  const loginHandler = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      await login(_email, password)
      setError('Successfully Logged In')
    } catch (error) {
      setLoading(false)
      setError('Failed to sign up')
    }
  }

  if (isLoginForm) {
    handleClick = loginHandler
    altText = 'New to Netflix?'
    altBtnText = 'Signup'
    primaryBtnText = 'Login'
  } else {
    handleClick = SignUpHandler
    altText = 'Already a member?'
    altBtnText = 'Login'
    primaryBtnText = 'Signup'
  }

  return (
    <>
      <form
        className="relative flex flex-col w-full max-w-md px-8 py-16 bg-black rounded-lg gap-4"
        onSubmit={handleClick}
      >
        <HiX
          className="absolute text-xl cursor-pointer right-6 top-6 text-netflix-white"
          onClick={closeFormHandler}
        />
        <legend className="mb-8 text-3xl font-bold text-center text-netflix-white">
          {primaryBtnText}
        </legend>

        {/* Error */}
        {error && <p className="text-lg text-left text-netflix-red">{error}</p>}

        {/* Input Fields */}
        {!isLoginForm && (
          <InputField
            type="text"
            placeholder="Username"
            required
            styles="p-3"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        )}
        <InputField
          type="email"
          placeholder="Email"
          required
          styles="p-3"
          value={_email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          required
          minLength={6}
          styles="p-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button disabled={loading} type="submit" styles="my-4">
          {primaryBtnText}
        </Button>

        {/* Additional Text */}
        <p className="text-netflix-white">
          {altText}
          <a
            className="ml-2 font-bold text-netflix-red"
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setIsLoginForm(!isLoginForm)
            }}
          >
            {altBtnText}
          </a>
        </p>
      </form>
    </>
  )
}

export default SignUpForm
