import React, { useContext } from 'react'
import { Wrapper, ContextObjectWrapper, Pre } from './contextInfo.styles'
import UserDetailsContext from '../../context/userDetails.context'
import LoadingContext from '../../context/loading.context'

const ContextInfo = () => {
  const userDetailsStoredInContext = useContext(UserDetailsContext)
  const loadingDetailsStoredContext = useContext(LoadingContext)

  return (
    <Wrapper>
      <ContextObject
        contextName='userDetailsContext'
        obj={userDetailsStoredInContext}
      />
      <ContextObject
        contextName='loadingContext'
        obj={loadingDetailsStoredContext}
      />
    </Wrapper>
  )
}

export default ContextInfo

const ContextObject = ({ contextName, obj }) => (
  <ContextObjectWrapper>
    <Pre bold underline large>
      {contextName}
    </Pre>
    {Object.keys(obj).map((key, index) => (
      <Pre key={key}>
        <span>{key}: </span>
        <span>{outputFormattedContextValue(obj[key])}</span>
      </Pre>
    ))}
  </ContextObjectWrapper>
)

function outputFormattedContextValue (contextValue) {
  if (typeof contextValue !== 'function') {
    if (contextValue === 0) {
      return '0'
    }

    return contextValue || "''"
  }

  return 'function()'
}
