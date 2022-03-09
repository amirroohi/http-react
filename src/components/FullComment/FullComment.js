import { useEffect, useState } from "react";
import { deleteComment } from "../../services/deleteCommentService";
import { getAllComments } from "../../services/getAllCommentService";
import { getOneComment } from "../../services/getOneCommentService";
import "./fullComment.css";


const FullComment = ({ commentId, setComments ,setSelectedId}) => {
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
      await deleteComment(commentId)
      const { data } = await getAllComments();
      setComments(data);
      setSelectedId(null);
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
