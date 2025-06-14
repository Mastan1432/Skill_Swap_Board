import { useEffect, useState } from 'react';
import Form from './components/Form';
import axios from "axios";
import PostList from './components/PostList';
import MatchList from './components/MatchList';
import "../src/App.css"

function App() {
  const [posts,setPosts]=useState([]);
  const [userMobile,setUserMobile]=useState(null);

  const fetchPosts=async ()=>{
    const res=await axios.get("http://localhost:4050/api/posts");
    setPosts(res.data);
  }

  useEffect(()=>{
    fetchPosts();
  },[]);


  return (
    <div className="App">
      <h1>Skill Swap Board</h1>
      <Form refreshPosts={fetchPosts} setUserMobile={setUserMobile}/>
      <PostList posts={posts}/>
      <MatchList posts={posts} userMobile={userMobile}/>
    </div>
  );
}

export default App;
