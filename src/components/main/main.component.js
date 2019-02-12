import React from 'react'
import { Wrapper, ContentWrapper, StyledRouter } from './main.styles'
import Login from '../login'
import UserProfile from '../userProfile'
import ContextInfo from '../contextInfo'

const Main = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <StyledRouter>
          <Login path='/' default />
          <UserProfile path='/mydetails' />
        </StyledRouter>
        <ContextInfo />
      </ContentWrapper>
    </Wrapper>
  )
}

export default Main
