import { useEffect, useState } from 'react';
import * as api from '../api'
import CommentCard from './CommentCard';


export default function Comments(props) {
    const { article_id } = props
    console.log(article_id)
    const [comments, setComments] = useState([])

    useEffect(() => {
        api.getCommentByArticleId(article_id).then(({ comments }) => {
            console.log(comments)
            setComments(comments)
        })
    }, [article_id])

    console.log(comments)

    if (comments.length === 0) {
        return (
            <>
                <h2 id = 'comments_header'>Comments</h2>
                <p className='comment_text'>There are no comments to display for this article.</p>
            </>
        )
    }

    return (
        <section>
            <h2 id = 'comments_header'>Comments</h2>
                {comments.map(({  comment_id, body, author, votes, created_at }) => {
                    return (
                        <CommentCard
                            key={comment_id}
                            body={body}
                            author={author}
                            created_at={created_at}
                            votes={votes}
                        />
                    );
                })
                    
                }
            
            </section>
        )
}