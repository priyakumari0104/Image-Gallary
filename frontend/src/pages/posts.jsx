import React, { useState ,useEffect, use} from "react";
import "../styles/posts.css";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      caption: "Beautiful view 🌄",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      caption: "Enjoying the moment ✨",
    },

  ]);
useEffect(()=>{
  axios.get("http://localhost:3000/posts")
  .then((res)=>{
    setPosts(res.data.post);
  })
})
  return (
    <div className="posts-page">
      <h1>All Posts</h1>

      <div className="posts-container">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <img src={post.image} alt="post" />
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;