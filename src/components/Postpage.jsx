import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Postpage = ({ posts, handleDelete }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.find(post => post.id.toString() === id);

  const deleteAndRedirect = (id) => {
    handleDelete(id);
    navigate("/");
  };

  return (
    <article className="PostPage">
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p className="postDate">{post.datetime}</p>
          <p className="postBody">{post.body}</p>
          <button onClick={() => deleteAndRedirect(post.id)}>DELETE</button>
        </>
      ) : (
        <>
          <p>Post not found.</p>
          <p><Link to="/">Return To Home</Link></p>
        </>
      )}
    </article>
  );
};

export default Postpage;
