import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2em;
  width: 100%;
  @media (min-width: 500px) {
    width: 400px;
    margin-right: 2em;
  }
`

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2em;
  margin-bottom: 5px;
`

export const Input = styled.input.attrs({
  type: 'text'
})`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2em;
  border: 1px solid #ccc;
  padding: 5px;
  color: #777;
`
