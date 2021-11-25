import { useBoolean, useLocalStorageState } from 'ahooks'
import { createContext, FC, useCallback, useContext, useEffect } from 'react'

import { httpClient } from '../utils/httpClient'

interface SignInRequest {
  email: string
  password: string
}

interface SignInResponse {
  accessToken: string
}

interface AuthContextData {
  isAuthenticated: boolean
  signIn: (credentials: SignInRequest) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const key = '@EasyMarket:accessToken'
const initialAuth = !!JSON.parse(localStorage.getItem(key) ?? 'null')

const useProvideAuth = (): AuthContextData => {
  const [isAuthenticated, { setTrue, setFalse }] = useBoolean(initialAuth)
  const [accessToken, setAccessToken] = useLocalStorageState<string | null>(
    key,
    null,
  )

  const signIn = useCallback(
    async ({ email, password }: SignInRequest) => {
      const { data } = await httpClient.post<SignInResponse>('/auth/login', {
        email,
        password,
      })
      setAccessToken(data.accessToken)
    },
    [setAccessToken],
  )

  const signOut = useCallback(() => setAccessToken(null), [setAccessToken])

  useEffect(() => {
    if (accessToken) {
      httpClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`
      setTrue()
    } else {
      delete httpClient.defaults.headers.common.Authorization
      setFalse()
    }
  }, [accessToken, setFalse, setTrue])

  return {
    isAuthenticated,
    signIn,
    signOut,
  }
}

export const AuthProvider: FC = ({ children }) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}