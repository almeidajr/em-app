import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

interface PrivateRouteProps {
  children: JSX.Element
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/', { replace: true })
    }
  }, [isAuthenticated, navigate])

  return children
}
