import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as api from '../api'
import ArticleCard from './ArticleCard';
import Comments from './Comments';
import ErrorPage from './Error';


export default function SingleArticle() {

    const { article_id } = useParams()

    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true);
      const [err, setErr] = useState(null);
   

    
    
    useEffect(() => {
        setIsLoading(true)
        api.getArticlesByArticleId(article_id).then(({ article }) => {
        
            setArticle(article)
            setIsLoading(false)
            
        }).catch(() => {
            setErr(true)
            setIsLoading(false)
        })
    }, [article_id])
    
    
    if (isLoading) return <p id='loading'>loading, please wait</p>;
    if(err) return <ErrorPage />
    
    return (
        <section>
            <ArticleCard
                key={article.article_id}
                article_id={article.article_id}
                title={article.title}
                topic={article.topic}
                body={article.body}
                comment_count={article.comment_count}
                author={article.author}
                created_at={article.created_at}
                votes={article.votes}
            />
            
                <Comments
                article_id={article.article_id}
                comment_count={article.comment_count}
                 /> 

        </section>
)
}