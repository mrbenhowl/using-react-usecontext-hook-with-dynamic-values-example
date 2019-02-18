import styled from 'styled-components'
import { Router } from '@reach/router'

export const Wrapper = styled.div`
  background-image: linear-gradient(
    45deg,
    #ff9a9e 0%,
    #fad0c4 99%,
    #fad0c4 100%
  );
  min-height: 100vh;
  padding: 10px;
  padding-bottom: 0;
  color: #fff;
  display: flex;
  justify-content: center;
`
export const ContentWrapper = styled.div`
  max-width: 960px;
  width: 100%;
`

export const StyledRouter = styled(Router)`
  width: 100%;
  margin-top: 3em;
`
