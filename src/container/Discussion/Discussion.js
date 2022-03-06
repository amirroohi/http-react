import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import "./discussion.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);

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
    const getComments = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/comments");

        setComments(data);
      } catch (error) {
        setError(true);
      }
    };

    getComments();
  }, []);

  const selectHandler = (id) => {
    // console.log(id);
    setSelectedId(id);
  };

  // const deleteHandler = async () => {
  //   try {
  //     await axios.delete(`http://localhost:3001/comments/${selectedId}`);
  //     const {data} = await axios.get("http://localhost:3001/comments")
  //     setComments(data)
  //   } catch (error) {}

  //   axios
  //     .delete(`http://localhost:3001/comments/${selectedId}`)
  //     .then((response) => console.log(response.data))
  //     .catch((error) => console.log(error));
  // };

  const renderComments = () => {
    let renderedComments = <p>Loading...</p>;
    if (error) {
      renderedComments = <p>Database is Disconnected!</p>;
      toast.error("Database is Disconnected !");
    }
    if (comments && !error) {
      // toast.success("Database loaded !")
      renderedComments = comments.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          email={comment.email}
          body={comment.body}
          onClick={() => selectHandler(comment.id)}
        />
      ));
    } else {
    }

    return renderedComments;
  };

  return (
    <main>
      <section className="comments">{renderComments()}</section>
      <section>
        <FullComment
          commentId={selectedId}
          setComments={setComments}
        />
      </section>
      <section>
        <NewComment setComments={setComments} />
      </section>
    </main>
  );
};

export default Discussion;
