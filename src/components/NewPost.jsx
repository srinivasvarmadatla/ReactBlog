import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewPost = ({ handleSubmit, title, setTitle, body, setBody }) => {
  const navigate = useNavigate();

  const handle = (e) => {
    e.preventDefault();
    handleSubmit();
    navigate('/');
  };

  return (
    <main className='NewPost'>
      <form htmlFor='post' onSubmit={handle} className='newPostForm'>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="body">Post</label>
        <textarea
          name="body"
          id="body"
          placeholder="Enter your blog"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <button type="submit">POST</button>
      </form>
    </main>
  );
};

export default NewPost;
