import { useEffect, useState } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";

export default function Comments() {
  const { article_id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    api.getCommentByArticleId(article_id).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    }).catch(() => {})
  }, [article_id]);

  if (comments.length === 0) {
    return (
      <>
        <h2 id="comments_header">Comments</h2>
        <p className="comment_text">
          There are no comments to display for this article.
        </p>
      </>
    );
  }

  if (isLoading) return <p>loading..</p>;

  return (
    <section>
      <h2 id="comments_header">Comments</h2>
      <AddComment setComments={setComments} article_id={article_id} />
      {comments.map(({ comment_id, body, author, votes, created_at }) => {
        return (
          <CommentCard
            key={comment_id}
            body={body}
            author={author}
            created_at={created_at}
            votes={votes}
          />
          
          
        //   <article key={comment_id}>

        //     <h4 className="comment_text" id='comment_author'>{author}</h4>
        //     <p className="comment_text" id='comment_body'>{body}</p>
        //     <p className="comment_text" id='comment_votes'>{votes}</p>
        //     <p className="comment_text" id="comment_created_at">{created_at.slice(0, 10)}</p>
            
        // </article>
        );
      })}
    </section>
  );
}
