import { useEffect, useState } from 'react';
import * as api from '../api'
import ArticleCard from './ArticleCard';


export default function ArticleList() {
   
    const [articles, setArticles] = useState([])

    useEffect(() => {
        api.getArticles().then(({ articles }) => {
            
            setArticles(articles)
        })
    }, [])

    return (
        <section>
            {articles.map(({ article_id, title, body, topic, comment_count, author }) => {
                return (
                    <ArticleCard
                        key={article_id}
                        title={title}
                        body={body}
                        topic={topic}
                        comment_count={comment_count}
                        author={author}
                    />
                );
            })}
        </section>
       
    )

}