import { useEffect } from 'react';
import * as api from '../api'
import ArticleCard from './ArticleCard';
import { useParams } from 'react-router-dom';


export default function TopicPages(props) {
    const { topic } = useParams();
    console.log(topic)
    useEffect(() => {
        props.setIsLoading(true)
        api.getArticlesByTopic(topic).then(({ articles }) => {
            
            props.setArticles(articles)
         props.setIsLoading(false)
        })
    }, [topic])

    if (props.isLoading) return <p id='loading'>loading, please wait</p>;

        return (
           <section>
            {props.articles.map(({ article_id, title, body, topic, comment_count, author, created_at }) => {
                return (
                    <ArticleCard
                        key={article_id}
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