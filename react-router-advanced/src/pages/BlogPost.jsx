import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>This is the blog post content for post ID: {id}.</p>
    </div>
  );
};

export default BlogPost;
