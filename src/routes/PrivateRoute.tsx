import { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'
import { paths } from './paths'

interface PrivateRouteProps {
  children: JSX.Element
}

const queryClient = new QueryClient()

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated, isReady } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isReady && !isAuthenticated) {
      queryClient.cancelQueries()
      navigate(paths.signIn, { replace: true })
    }
  }, [isAuthenticated, isReady, navigate])

  if (!isReady) {
    return null
  }

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  )
}
