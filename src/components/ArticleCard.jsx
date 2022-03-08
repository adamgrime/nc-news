import { Link } from 'react-router-dom'

export default function ArticleCard({ article_id, title, body, topic, comment_count, author, created_at }) {
    return (
        <article className="content">
            <Link to={`/articles/${article_id}`}>
                <h2 id='article_headline' >{title}</h2>
                </Link>
            <p className='article_body'>{body}</p>
            <p className = 'topic'>Topic : {topic}</p>
            <p className='comments'>Comments: {comment_count}</p>
            <p className="created-at">Created at: {created_at.slice(0,10)} </p>
        </article>

    )
    
}
