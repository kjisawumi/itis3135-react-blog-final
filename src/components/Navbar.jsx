import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { ThemeContext } from '../context/ThemeContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <nav aria-label="Main navigation">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      {user ? <><span className="user-badge">Hi, {user.username}</span><button className="nav-action" type="button" onClick={handleLogout}>Logout</button></> : <NavLink to="/login">Login</NavLink>}
      <button
        className="theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-pressed={theme === 'dark'}
        aria-label="Dark mode"
      >
        {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      </button>
    </nav>
  )
}
