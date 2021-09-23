import React, { createContext, useContext, useEffect, useState } from 'react'

import '@utils/firebase.ts'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

const AuthContext = createContext<object>(null)

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState<object>()

  /* Initialize Firebase Auth */
  const auth = getAuth()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* Sign Up Function */
  const signUp = async (email, password, username) => {
    //create use
    await createUserWithEmailAndPassword(auth, email, password)

    //update profile
    const user = auth.currentUser
    await updateProfile(user, { displayName: username })
    setCurrentUser({ ...user })
  }

  /* Login Function */
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  /* Logout Function */
  const logout = () => {
    return signOut(auth)
  }

  /* Setting up value */
  const value = {
    currentUser,
    signUp,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
