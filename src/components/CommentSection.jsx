import CommentForm from './CommentForm.jsx'
import CommentList from './CommentList.jsx'
import { Link, useLocation } from 'react-router'
import { useAuth } from '../context/AuthContext.jsx'

export default function CommentSection({ postId, comments, onAddComment }) {
  const { user } = useAuth()
  const location = useLocation()
  return (
    <section className="comment-section" aria-labelledby={`comments-title-${postId}`}>
      <h3 id={`comments-title-${postId}`}>Comments</h3>
      {user ? <CommentForm key={user.username} postId={postId} onAddComment={onAddComment} /> : <p className="login-prompt"><Link to="/login" state={{ from: location.pathname }}>Login to leave a comment</Link> and join the conversation.</p>}
      <h4>Existing Comments:</h4>
      <CommentList comments={comments} />
    </section>
  )
}
