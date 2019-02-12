import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
`

export const Pre = styled.pre`
  white-space: pre-wrap;
  word-break: break-all;
  margin: 5px;
  font-weight: ${props => (props.bold ? '800' : '400')};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  font-size: ${props => (props.large ? '1.5em' : '1.1em')};
`

export const ContextObjectWrapper = styled.div`
  margin-bottom: 20px;

  :first-child {
    margin-right: 40px;
  }

  :last-child {
    margin-bottom: 0;
    padding-bottom: 20px;
  }
`
