import { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'

export default function CommentForm({ postId, onAddComment }) {
  const { user } = useAuth()
  const [content, setContent] = useState('')
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const contentId = `comment-content-${postId}`

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}
    if (!content.trim()) nextErrors.content = 'Please enter a comment.'
    setErrors(nextErrors)
    setStatus('')
    if (Object.keys(nextErrors).length > 0) return

    if (!user) return
    onAddComment({ content: content.trim() })
    setContent('')
    setStatus('Your comment was added.')
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit} noValidate>
      <p className="comment-identity">Commenting as <strong>{user?.username}</strong></p>
      <div className="form-field">
        <label htmlFor={contentId}>Comment</label>
        <textarea
          id={contentId}
          name="comment"
          placeholder="Add a comment"
          required
          value={content}
          onChange={(event) => { setContent(event.target.value); setErrors({}); setStatus('') }}
          aria-invalid={Boolean(errors.content)}
          aria-describedby={errors.content ? `${contentId}-error` : undefined}
        />
        {errors.content && <p className="form-error" id={`${contentId}-error`} role="alert">{errors.content}</p>}
      </div>
      <button className="submit-button" type="submit">Post comment</button>
      <p className="form-status" role="status">{status}</p>
    </form>
  )
}
