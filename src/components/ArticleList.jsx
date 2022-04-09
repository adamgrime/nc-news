import { useEffect, useState } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import { SortBy } from "./SortBy";
import { useParams } from "react-router-dom";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("created_at");
  const { topic } = useParams();
  const [order, setOrder] = useState();

  useEffect(() => {
    setIsLoading(true);
    api.getArticles(topic, sort, order).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic, sort, order]);

  if (isLoading) return <p id="loading">loading, please wait</p>;

  return (
    <section>
      <SortBy setSort={setSort} setOrder={setOrder} />
      {articles.map(
        ({
          article_id,
          title,
          body,
          topic,
          comment_count,
          author,
          created_at,
          votes,
        }) => {
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
        }
      )}
    </section>
  );
}
