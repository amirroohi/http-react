import { useEffect, useState } from "react";
import { deleteComment } from "../../services/deleteCommentService";
import { getOneComment } from "../../services/getOneCommentService";
import "./fullComment.css";

const FullComment = ({ match ,history}) => {
  // console.log(match.params.id);
  console.log(history);
  const commentId = match.params.id;

  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
        .then((response) => setComment(response.data))
        .catch((error) => console.log(error));
    }
  }, [commentId]);

  const deleteHandler = async () => {
    try {
      await deleteComment(commentId);
      history.push("/")
      setComment(null);
    } catch (error) {}
  };

  let commentDetail = <p>please select a comment!</p>;

  if (commentId) {
    commentDetail = <p>loading...</p>;
  }

  if (comment) {
    commentDetail = (
      <div className="fullcomment">
        <p>Name : {comment.name}</p>
        <p>Email : {comment.email}</p>
        <p>Body : {comment.body}</p>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    );
  }

  return commentDetail;
};

export default FullComment;
