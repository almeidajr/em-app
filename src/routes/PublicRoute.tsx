import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

interface PublicRouteProps {
  children: JSX.Element
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/purchases-historic', { replace: true })
    }
  }, [isAuthenticated, navigate])

  return children
}
