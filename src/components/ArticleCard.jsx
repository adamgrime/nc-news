// import { Link } from 'react-router-dom'

export default function ArticleCard({ article_id, title, body, topic, comment_count, author }) {
    return (
        <article className="content">
            <h2 id='article_headline'>{title}</h2>
            <p className='article_body'>{body}</p>
            <p className = 'topic'>Topic : {topic}</p>
            <p className='comments'>Comments: {comment_count}</p>
        </article>

    )
    
}
