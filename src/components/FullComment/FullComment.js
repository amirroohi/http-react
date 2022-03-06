import axios from "axios";
import { useEffect, useState } from "react";
import "./fullComment.css";

const FullComment = ({ commentId, setComments }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((response) => setComment(response.data))
        .catch((error) => console.log(error));
    }
  }, [commentId]);
  
  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:3001/comments/${commentId}`);
      const { data } = await axios.get("http://localhost:3001/comments");
      setComments(data);
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
