import { useState } from "react";
import { addNewPost } from "../../services/addNewCommentService";
import { getAllComments } from "../../services/getAllCommentService";
import "./newComment.css";

const NewComment = ({ setComments }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    content: "",
  });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postCommentHandler = async () => {
    try {
      await addNewPost({
        ...comment,
        postId: 10,
      });
      const { data } = await getAllComments();
      setComments(data);
    } catch (error) {}
  };

  return (
    <div className="newComment">
      <div>
        <label>name :</label>
        <input type="text" onChange={changeHandler} name="name" />
      </div>
      <div>
        <label>email :</label>
        <input type="email" onChange={changeHandler} name="email" />
      </div>
      <div>
        <label>body :</label>
        <textarea type="textarea" onChange={changeHandler} name="content" />
      </div>
      <button onClick={postCommentHandler}>Add New Comment</button>
    </div>
  );
};

export default NewComment;
