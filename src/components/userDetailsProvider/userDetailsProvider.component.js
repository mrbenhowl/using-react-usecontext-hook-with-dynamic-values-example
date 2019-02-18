import React, { useState } from 'react'
import merge from 'lodash.merge'
import UserDetailsContext from '../../context/userDetails.context'

const UserDetailsProvider = ({ children }) => {
  /**
   * User details state / controls
   */
  const setUserDetails = ({
    name,
    dateOfBirth,
    email,
    secretQuestion,
    secretAnswer
  }) => {
    updateUserDetails(prevState => {
      const newState = { ...prevState }
      return merge(newState, {
        name,
        dateOfBirth,
        email,
        secretQuestion,
        secretAnswer
      })
    })
  }

  const userState = {
    name: '',
    dateOfBirth: '',
    email: '',
    secretQuestion: '',
    secretAnswer: '',
    setUserDetails
  }

  const [userDetails, updateUserDetails] = useState(userState)

  return (
    <UserDetailsContext.Provider value={userDetails}>
      {children}
    </UserDetailsContext.Provider>
  )
}

export default UserDetailsProvider
