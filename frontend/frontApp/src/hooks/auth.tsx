import React, { createContext, useCallback, useState, useContext } from 'react'
import api from '../utils/api'

interface AuthFormat {
  token: string
  user: object
}
interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: object
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthFormat>(() => {
    const token = localStorage.getItem('@GoBarber:token')
    const user = localStorage.getItem('@GoBarber:user')
    if (token && user) {
      return { token, user: JSON.parse(user) }
    }
    return {} as AuthFormat
  })
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post<AuthFormat>(
      'login?user=' + email + '&password=' + password
    )
    const { token, user } = response.data

    localStorage.setItem('@TradeMaster:token', token)
    localStorage.setItem('@TradeMaster:user', JSON.stringify(user))

    setData({ token, user })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@TradeMaster:token')
    localStorage.removeItem('@TradeMaster:user')

    setData({} as AuthFormat)
  }, [])
  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export { AuthProvider, useAuth }
