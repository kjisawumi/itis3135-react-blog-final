import Navbar from './Navbar.jsx'

export default function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <h1>My Blog</h1>
      <Navbar />
    </header>
  )
}
