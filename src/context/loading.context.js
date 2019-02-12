import { createContext } from 'react'

const LoadingContext = createContext({
  loadingCount: 0,

  /**
   * Although it is possible to remove the following I like to keep them here
   * because they help anyone importing LoadingContext to understand what API (methods)
   * this particular context has available
   */
  showLoading: () => {},
  closeLoading: () => {}
})

export default LoadingContext
