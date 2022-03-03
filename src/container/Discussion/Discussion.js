import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import "./discussion.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/comments")
    //   .then((response) => {
    //     // console.log(response);
    //     setComments(response.data.slice(0, 4));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // console.log(promise);
    getComments();
  }, []);

  const getComments = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/comments");

      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };
  const selectHandler = (id) => {
    // console.log(id);
    setSelectedId(id);
  };

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:3001/comments/${selectedId}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  const postCommentHandler = (comment) => {
    // const data = {
    //   name: comment.name,
    //   email: comment.email,
    //   content: comment.content,
    // };
    axios
      .post("http://localhost:3001/comments", { ...comment, postId: 10 })
      .then((response) => axios.get("http://localhost:3001/comments"))
      .then((response) => setComments(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <main>
      <section className="comments">
        {comments ? (
          comments.map((comment) => (
            <Comment
              key={comment.id}
              name={comment.name}
              email={comment.email}
              body={comment.body}
              onClick={() => selectHandler(comment.id)}
            />
          ))
        ) : (
          <p>Loading ...</p>
        )}
      </section>
      <section>
        <FullComment commentId={selectedId} deleteHandler={deleteHandler} />
      </section>
      <section>
        <NewComment onAddPost={postCommentHandler} />
      </section>
    </main>
  );
};

export default Discussion;
