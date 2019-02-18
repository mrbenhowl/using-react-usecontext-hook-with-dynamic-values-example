import React, { useContext } from 'react'
import { Wrapper, SpinningCircle } from './spinner.styles'
import LoadingContext from '../../context/loading.context'

const Spinner = () => {
  const { loadingCount } = useContext(LoadingContext)

  return (
    <>
      {loadingCount > 0 && (
        <Wrapper>
          <SpinningCircle />
        </Wrapper>
      )}
    </>
  )
}

export default Spinner
