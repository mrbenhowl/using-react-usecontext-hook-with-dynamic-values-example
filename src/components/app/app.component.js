import React, { useState, useContext } from 'react'
import merge from 'lodash.merge'
import GlobalStyle from '../globalStyle'

import TitleBar from '../titleBar'
import Main from '../main'
import Spinner from '../spinner'

import UserDetailsContext from '../../context/userDetails.context'
import LoadingContext from '../../context/loading.context'

const App = () => {
  /**
   * User details state / controls
   */
  const { name, dateOfBirth, email, secretQuestion, secretAnswer } = useContext(
    UserDetailsContext
  )

  const setUserDetails = ({
    name,
    dateOfBirth,
    email,
    secretQuestion,
    secretAnswer
  }) => {
    updateUserDetails(prevState => {
      const newState = {...prevState}
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
    name,
    dateOfBirth,
    email,
    secretQuestion,
    secretAnswer,
    setUserDetails
  }

  const [userDetails, updateUserDetails] = useState(userState)

  /**
   * Loading state/controls
   */
  const { loadingCount } = useContext(LoadingContext)

  const showLoading = () => {
    toggleLoading(prevState => {
      return {
        ...prevState,
        loadingCount: prevState.loadingCount + 1
      }
    })
  }

  const hideLoading = () => {
    toggleLoading(prevState => {
      return {
        ...prevState,
        loadingCount:
          prevState.loadingCount > 0 ? prevState.loadingCount - 1 : 0
      }
    })
  }

  const loadingState = {
    loadingCount,
    showLoading,
    hideLoading
  }

  const [loading, toggleLoading] = useState(loadingState)

  return (
    <>
      <GlobalStyle />
      <LoadingContext.Provider value={loading}>
        {loading.loadingCount ? <Spinner /> : null}
        <UserDetailsContext.Provider value={userDetails}>        
          <TitleBar />
          <Main />        
        </UserDetailsContext.Provider>
      </LoadingContext.Provider>
    </>
  )
}

export default App
