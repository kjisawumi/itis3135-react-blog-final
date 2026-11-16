import { Navigate, useLocation } from 'react-router'
import { useAuth } from '../context/AuthContext.jsx'

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth()
  const location = useLocation()
  return isAuthenticated ? children : <Navigate to="/login" state={{ from: location.pathname }} replace />
}
