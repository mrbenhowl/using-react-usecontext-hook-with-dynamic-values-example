import React, { useState, useContext } from 'react'
import { authenticate } from '../../modules/auth'
import LoadingContext from '../../context/loading.context'
import {
  Wrapper,
  LoginDetails,
  FieldWrappers,
  ButtonWrapper
} from './login.styles'
import UserDetailsContext from '../../context/userDetails.context'
import Heading from '../heading/heading.component'
import { navigate } from '@reach/router'
import TextField from '../textField'

const Login = () => {
  const { showLoading, hideLoading } = useContext(LoadingContext)
  const { setUserDetails } = useContext(UserDetailsContext)

  /**
   * For the purposes of this demo email and password are stored in state
   * to allow easy access for sending to the pretend auth endpoint.
   */
  const [email] = useState('bruce.lee@enterthedragon.com')
  const [password] = useState('kungfu')

  const authenticateUser = () => {
    showLoading()
    authenticate(email, password).then(userDetails => {
      const {
        name,
        dateOfBirth,
        email,
        secretQuestion,
        secretAnswer
      } = userDetails

      setUserDetails({ name, dateOfBirth, email, secretQuestion, secretAnswer })
      hideLoading()
      navigate('/mydetails')
    })
  }

  return (
    <Wrapper>
      <LoginDetails>
        <Heading>Hello</Heading>

        <FieldWrappers>
          <TextField label='email' value={email} readOnly />
          <TextField
            label='password'
            type='password'
            value={password}
            readOnly
          />
        </FieldWrappers>

        <ButtonWrapper>
          <button onClick={authenticateUser}>log in</button>
        </ButtonWrapper>
      </LoginDetails>
    </Wrapper>
  )
}

export default Login
