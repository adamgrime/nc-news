import { useEffect, useState } from 'react';
import * as api from '../api'
import ArticleCard from './ArticleCard';


export default function ArticleList() {

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);
   
    

    useEffect(() => {
        setIsLoading(true)
        api.getArticles().then(({ articles }) => {

            setArticles(articles)
            setIsLoading(false)

        })
    }, [])

    
    if (isLoading) return <p id='loading'>loading, please wait</p>;

    
    return (
        <section>
            {articles.map(({ article_id, title, body, topic, comment_count, author, created_at, votes }) => {
                return (
                    <ArticleCard
                        key={article_id}
                        title={title}
                        article_id={article_id}
                        topic={topic}
                        comment_count={comment_count}
                        author={author}
                        created_at={created_at}
                        votes={votes}
                    />
                );
            })}
        </section>
       
    )
}