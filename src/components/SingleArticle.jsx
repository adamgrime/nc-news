import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import * as api from '../api'
import ArticleCard from './ArticleCard';
import Comments from './Comments';


export default function SingleArticle(props) {
    const { article_id } = useParams()



        useEffect(() => {
        props.setIsLoading(true)
        api.getArticlesByArticleId(article_id).then(({ article }) => {
        
        props.setArticles([article])
         props.setIsLoading(false)
        })
        }, [article_id])
    
    
    return (
        <section>
            {props.articles.map(({ article_id, title, body, topic, comment_count, author, created_at }) => {
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