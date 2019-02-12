import React from 'react'
import { Wrapper, Label, Input } from './textField.styles'

const TextField = ({ label, value, ...rest }) => (
  <Wrapper>
    <Label>{label}</Label>
    <Input value={value} {...rest} />
  </Wrapper>
)

export default TextField
