import React from 'react'

import SignUpForm from '@components/SignUpForm'

const SignUpFormContainer = ({ closeFormHandler, email }) => {
  return (
    <div className="flex justify-center mt-40">
      <SignUpForm closeFormHandler={closeFormHandler} email={email} />
    </div>
  )
}

export default SignUpFormContainer
