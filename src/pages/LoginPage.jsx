import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router'
import { DEMO_ACCOUNT, useAuth } from '../context/AuthContext.jsx'

export default function LoginPage() {
  const { user, login } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const from = location.state?.from
  const destination = typeof from === 'string' && from.startsWith('/') && !from.startsWith('//') ? from : '/blog'

  if (user) return <Navigate to={destination} replace />

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}
    if (!username.trim()) nextErrors.username = 'Enter your username.'
    if (!password) nextErrors.password = 'Enter your password.'
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }
    if (!login(username, password)) {
      setErrors({ credentials: 'The username or password is incorrect. Use the demo account below.' })
      return
    }
    setPassword('')
    navigate(destination, { replace: true })
  }

  return (
    <section className="login-layout" aria-labelledby="login-title">
      <div className="login-intro">
        <p className="eyebrow">YOUR NEXT GOOD READ</p>
        <h2 id="login-title">Welcome back.<br />Let’s keep exploring.</h2>
        <p>Log in to explore the full blog and add your perspective to the conversation.</p>
        <Link className="back-link" to="/">← Back to home</Link>
      </div>
      <div className="login-card">
        <h3>Login to My Blog</h3>
        <p className="form-note">This class project uses one shared demo account.</p>
        <div className="demo-account" aria-label="Demo account">
          <span>Username <code>{DEMO_ACCOUNT.username}</code></span>
          <span>Password <code>{DEMO_ACCOUNT.password}</code></span>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="login-username">Username</label>
            <input id="login-username" autoComplete="username" value={username} required onChange={(event) => { setUsername(event.target.value); setErrors({}) }} aria-invalid={Boolean(errors.username)} aria-describedby={errors.username ? 'username-error' : undefined} />
            {errors.username && <p id="username-error" className="form-error" role="alert">{errors.username}</p>}
          </div>
          <div className="form-field">
            <label htmlFor="login-password">Password</label>
            <input id="login-password" type="password" autoComplete="current-password" value={password} required onChange={(event) => { setPassword(event.target.value); setErrors({}) }} aria-invalid={Boolean(errors.password)} aria-describedby={errors.password ? 'password-error' : undefined} />
            {errors.password && <p id="password-error" className="form-error" role="alert">{errors.password}</p>}
          </div>
          {errors.credentials && <p className="form-error" role="alert">{errors.credentials}</p>}
          <button className="submit-button login-submit" type="submit">Login</button>
        </form>
      </div>
    </section>
  )
}
