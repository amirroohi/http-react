import Comment from "./Comment/Comment";
import "./comments.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllComments } from "../../services/getAllCommentService";
import { Link } from "react-router-dom";

const CommentsList = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {

    const getComments = async () => {
      try {
        const { data } = await getAllComments()
          .then
          // toast.success("Database loaded !")
          ();

        setComments(data);
      } catch (error) {
        toast.error("out of order !");
        setError(true);
      }
    };

    getComments();
  }, []);


  const renderComments = () => {
    let renderedComments = <p>Loading...</p>;
    if (error) {
      renderedComments = <p>Database is Disconnected!</p>;
      // toast.error("Database is Disconnected !");
    }
    if (comments && !error) {
      // toast.success("Database loaded !");
      renderedComments = comments.map((comment) => (
        <Link to={`/comment/${comment.id}`} key={comment.id}>
          <Comment name={comment.name} email={comment.email} />
        </Link>
      ));
    } else {
    }

    return renderedComments;
  };

  return <section className="comments">{renderComments()}</section>;
};

export default CommentsList;
