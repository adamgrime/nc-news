import { useEffect, useState } from 'react';
import * as api from '../api'
import ArticleCard from './ArticleCard';
import { useParams } from 'react-router-dom';


export default function TopicPages() {
    
    const { topic } = useParams();
    
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() => {
        setIsLoading(true)
        api.getArticlesByTopic(topic).then(({ articles }) => {
            
        setArticles(articles)
        setIsLoading(false)
        })
    }, [topic])

    
    if (isLoading) return <p id='loading'>loading, please wait</p>;
        return (
           <section>
            {articles.map(({ article_id, title, body, topic, comment_count, author, created_at }) => {
                return (
                    <ArticleCard
                        key={article_id}
                        article_id={article_id}
                        title={title}
                        topic={topic}
                        comment_count={comment_count}
                        author={author}
                        created_at={created_at}
                    />
                );
            })}
        </section>
    )
}