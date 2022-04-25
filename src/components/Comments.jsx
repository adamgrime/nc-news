import { useEffect, useState, useContext } from "react";
import * as api from "../api";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";
import { UserContext } from "../context/UserContext";
import ErrorPage from "./Error";

export default function Comments() {
  const { article_id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const { loggedInUser } = useContext(UserContext);
  const [err, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .getCommentByArticleId(article_id)
      .then(({ comments }) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [article_id]);

  const handleDelete = (event) => {
    event.preventDefault();
    const id = event.target.value;

    setComments(() => {
      const updatedComments = comments.filter((comment) => {
        return comment.comment_id !== parseInt(id);
      });
      return updatedComments;
    });

    api
      .deleteComment(id)
      .then(() => {})
      .catch((err) => {
        setError(err);
      });
  };

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
  if (err) return <ErrorPage />;

  return (
    <section>
      <h2 id="comments_header">Comments</h2>
      <AddComment setComments={setComments} article_id={article_id} />
      {comments.map(({ comment_id, body, author, votes, created_at }) => {
        return (
          <article>
            <h4 className="comment_text" id="comment_author">
              {author}
            </h4>
            <p className="comment_text" id="comment_body">
              {body}
            </p>
            <p className="comment_text" id="comment_votes">
              {votes}
            </p>
            <p className="comment_text" id="comment_created_at">
              {created_at.slice(0, 10)}
            </p>
            {loggedInUser.username === author ? (
              <button value={comment_id} onClick={handleDelete}>
                Delete comment
              </button>
            ) : null}
          </article>
        );
      })}
    </section>
  );
}
