import { Link } from 'react-router-dom'
import { useState } from 'react'
import * as api from '../api'

export default function ArticleCard({ article_id, title, body, topic, comment_count, author, created_at, votes }) {

    const [newVote, changeVote] = useState(votes)
    const [err, setErr] = useState(null);

    const handleClick = (article_id, numberOfVotes) => {

        changeVote((currentVote) => {
            return currentVote += numberOfVotes
        });


        api.patchUser(article_id, numberOfVotes).catch((err) => {
              setErr("Something went wrong, please try again.");
        })

    }

    return (

        <article className="content">
            <Link to={`/articles/${article_id}`}>
                <h2 id='article_headline' >{title}</h2>
            </Link>
            
            <p className='article_body'>{body}</p>
            <p className = 'topic'>Topic : {topic}</p>
            <p className='comments'>Comments: {comment_count}</p>
            <p className="created-at">Created at: {created_at.slice(0, 10)} </p>

            <section>
                <h4>votes: {votes + newVote}</h4>
                <button className='vote-button' onClick={() => handleClick(article_id, 1)} >+</button>
                <button className='vote-button' onClick={() => handleClick(article_id, -1)}>-</button>
                {err ? <p>{err}</p> : null}
            </section>
            
        </article>

    )
    
}
