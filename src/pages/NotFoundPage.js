import { Link } from "react-router-dom";

const NotFoundPage = (props) => {
  return (
    <>
      <p>Not found Page</p>
      <Link to="/">Go to home page</Link>
    </>
  );
};

export default NotFoundPage;
