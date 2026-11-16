import { Link } from 'react-router'
import { useAuth } from '../context/AuthContext.jsx'

export default function HomePage() {
  const { user } = useAuth()
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">WORDS, CODE & EVERYDAY DISCOVERIES</p>
          <h2 id="home-title">Make room for a new <em>perspective.</em></h2>
          <p className="hero-description">Notes on learning React, building better habits, and turning curiosity into progress. Take a look around, then join the conversation.</p>
          <div className="hero-actions">
            <Link className="button-primary" to="/blog">{user ? 'Explore Blog' : 'Login & Explore' } <span aria-hidden="true">↗</span></Link>
            <Link className="button-secondary" to="/posts/2">Read a featured post <span aria-hidden="true">→</span></Link>
          </div>
          <p className="hero-byline">{user ? `Welcome back, ${user.username}. There’s always something new to learn.` : 'A student blog by Kitan Isawumi. A space for curious minds.'}</p>
        </div>
        <aside className="featured-note" aria-label="Featured story">
          <div className="note-topline"><span>THE OPEN NOTE</span><span aria-hidden="true">✳</span></div>
          <span className="note-category">FEATURED / LEARNING</span>
          <h3>Small components.<br />Bigger possibilities.</h3>
          <p>A few thoughts on how the pieces of a React app fit together.</p>
          <Link to="/posts/2">Read “Learning React Components” <span aria-hidden="true">→</span></Link>
          <div className="note-footer"><span>BY KITAN ISAWUMI</span><span>02 / 03</span></div>
        </aside>
      </section>
      <section className="home-features" aria-labelledby="home-features-title">
        <h2 id="home-features-title" className="visually-hidden">A place to read, reflect, and connect</h2>
        <article><span className="feature-number">01</span><h3>Follow your curiosity.</h3><p>Explore stories about learning, code, and the little things that move us forward.</p></article>
        <article><span className="feature-number">02</span><h3>Add your perspective.</h3><p>Log in to leave a comment. Your username comes with you, so you can focus on your ideas.</p></article>
        <article><span className="feature-number">03</span><h3>Make yourself comfortable.</h3><p>Read on your phone or your laptop, and switch between light and dark whenever you like.</p></article>
      </section>
      <section className="home-invitation" aria-label="Join the blog">
        <div><p className="eyebrow">THERE’S A CONVERSATION WAITING</p><h2>Ready to add your voice?</h2></div>
        <Link className="button-secondary" to={user ? '/blog' : '/login'}>{user ? 'Go to the blog' : 'Login to join'} →</Link>
      </section>
    </>
  )
}
