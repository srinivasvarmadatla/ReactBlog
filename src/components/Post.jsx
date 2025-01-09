import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  return (
    <article className='post'>
        <Link to={`/Postpage/${post.id}`}>
            <h2>{post.title}</h2>
            <p className='dataTime'>{post.datetime}</p>
        </Link>
        <p>
            {post.body.lenngth<25?(post.body):(`${post.body.slice(0,25)}...`)}
        </p>
    </article>
  )
}

export default Post