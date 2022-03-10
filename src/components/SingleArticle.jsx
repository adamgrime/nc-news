import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as api from '../api'
import ArticleCard from './ArticleCard';
import Comments from './Comments';


export default function SingleArticle() {

    const { article_id } = useParams()

    const [articles, setArticles] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    
    
    useEffect(() => {
        setIsLoading(true)
        api.getArticlesByArticleId(article_id).then(({ article }) => {
        
            setArticles(article)
            setIsLoading(false)
            
        })
    }, [article_id])
    
    
    if (isLoading) return <p id='loading'>loading, please wait</p>;
    
    
    return (
        <section>
            <ArticleCard
                key={articles.article_id}
                title={articles.title}
                topic={articles.topic}
                body={articles.body}
                comment_count={articles.comment_count}
                author={articles.author}
                created_at={articles.created_at}
            />
            
                <Comments
                    article_id={articles.article_id} /> 

        </section>
)
}
            
