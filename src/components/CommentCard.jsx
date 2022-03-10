export default function CommentCard({ comment_id, body, author, votes, created_at }) {
    return (
        <article>
            <h4 className="comment_text" id='comment_author'>{author}</h4>
            <p className="comment_text" id='comment_body'>{body}</p>
            <p className="comment_text" id='comment_votes'>{votes}</p>
            <p className="comment_text" id="comment_created_at">{created_at.slice(0,10)}</p>
        </article>
)
}