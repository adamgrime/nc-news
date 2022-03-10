import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as api from '../api'
import ArticleCard from './ArticleCard';
import Comments from './Comments';


export default function SingleArticle() {

    const { article_id } = useParams()

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    
    
    useEffect(() => {
        setIsLoading(true)
        api.getArticlesByArticleId(article_id).then(({ article }) => {
        
        setArticles([article])
        setIsLoading(false)
        })
    }, [article_id])
    
    
    if (isLoading) return <p id='loading'>loading, please wait</p>;
    
    
    return (
        <section>
            <ArticleCard
                key={articles[0].article_id}
                title={articles[0].title}
                topic={articles[0].topic}
                body={articles[0].body}
                comment_count={articles[0].comment_count}
                author={articles[0].author}
                created_at={articles[0].created_at}
            />
            
                <Comments
                    article_id={articles[0].article_id} /> 

        </section>
)
}
            
