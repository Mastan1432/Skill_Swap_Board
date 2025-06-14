import React from 'react'
import "../styles/PostList.css"
const PostList = ({posts}) => {
  return (
    <div className='post-container'>
        <h3>All Posts</h3>
        {posts.map((post,i)=>(
            <div key={i}>
                <h2>{post.name}</h2>
                <b>Can Teach:</b>{post.teach}<br/>
                <b>Want To Learn:</b>{post.learn}<br/>
                <b>Mobile:</b>{post.mobile}
            </div>
        ))}
    </div>
  )
}

export default PostList