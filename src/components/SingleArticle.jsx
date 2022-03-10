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
            {articles.map(({ article_id, title, body, topic, comment_count, author, created_at }) => {
                return (
                    <ArticleCard
                        key={article_id}
                        title={title}
                        topic={topic}
                        body={body}
                        comment_count={comment_count}
                        author={author}
                        created_at={created_at}
                        />
                        );
                    })
                    
                }
                <Comments
                    article_id={article_id} />
            
        </section>
)
}