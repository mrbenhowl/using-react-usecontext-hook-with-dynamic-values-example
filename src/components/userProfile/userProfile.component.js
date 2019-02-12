import React, { useContext } from 'react'
import { Wrapper, FieldWrappers } from './userProfile.styles'
import Heading from '../heading/heading.component'
import TextField from '../textField'
import UserDetailsContext from '../../context/userDetails.context'

const UserProfile = () => {
  const {
    name,
    dateOfBirth,
    email,
    secretQuestion,
    secretAnswer,
    setUserDetails
  } = useContext(UserDetailsContext)

  return (
    <Wrapper>
      <Heading>My details</Heading>

      <FieldWrappers>
        <TextField
          label='name'
          value={name}
          onChange={e => {
            setUserDetails({ name: e.target.value })
          }}
        />
        <TextField
          label='date of birth'
          value={dateOfBirth}
          onChange={e => {
            setUserDetails({ dateOfBirth: e.target.value })
          }}
        />
        <TextField
          label='email'
          value={email}
          onChange={e => {
            setUserDetails({ email: e.target.value })
          }}
        />
        <TextField
          label='secret question'
          value={secretQuestion}
          onChange={e => {
            setUserDetails({ secretQuestion: e.target.value })
          }}
        />
        <TextField
          label='secret answer'
          value={secretAnswer}
          onChange={e => {
            setUserDetails({ secretAnswer: e.target.value })
          }}
        />
      </FieldWrappers>
    </Wrapper>
  )
}

export default UserProfile
