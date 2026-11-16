import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)
const SESSION_KEY = 'my-blog-demo-session'
export const DEMO_ACCOUNT = { username: 'student', password: 'Blog123!' }

function restoreSession() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(SESSION_KEY))
    return saved?.username === DEMO_ACCOUNT.username ? { username: saved.username } : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(restoreSession)

  function login(username, password) {
    if (username.trim() !== DEMO_ACCOUNT.username || password !== DEMO_ACCOUNT.password) return false
    const profile = { username: DEMO_ACCOUNT.username }
    setUser(profile)
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(profile))
    } catch {
      // Navigation still works if the browser blocks session storage.
    }
    return true
  }

  function logout() {
    setUser(null)
    try {
      sessionStorage.removeItem(SESSION_KEY)
    } catch {
      // Clearing React state logs out even when storage is unavailable.
    }
  }

  return <AuthContext.Provider value={{ user, isAuthenticated: Boolean(user), login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
