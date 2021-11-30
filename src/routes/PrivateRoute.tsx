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
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      queryClient.cancelQueries()
      navigate(paths.signIn, { replace: true })
    }
  }, [isAuthenticated, navigate])

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
  )
}
