import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Home.css';
import axios from 'axios';

const Home = () => {
  
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/getallpost");
      setPosts(response.data.responseData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to Bloggo | Largest Blogging Platform</h1>
      <div className="card-grid">
        {posts?.map((post) => (
          <Card 
            key={post?._id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
