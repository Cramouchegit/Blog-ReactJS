import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const SinglePost = () => {
  const post = useLoaderData();

  return (
    <>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      <hr />

      <Link to="/blog">Back</Link>
    </>
  );
};

export default SinglePost;
