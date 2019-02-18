import React from 'react'
import GlobalStyle from '../globalStyle'

import TitleBar from '../titleBar'
import Main from '../main'
import Spinner from '../spinner'

import LoadingProvider from '../loadingProvider'
import UserDetailsProvider from '../userDetailsProvider'

const App = () => (
  <>
    <GlobalStyle />
    <LoadingProvider>
      <Spinner />
      <UserDetailsProvider>
        <TitleBar />
        <Main />
      </UserDetailsProvider>
    </LoadingProvider>
  </>
)

export default App
