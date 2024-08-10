import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/home/Home';
import CreatePost from './components/pages/newPost/CreatePost';
import { Route, Routes } from 'react-router-dom';
import SinglePost from './components/pages/singlePost/SinglePost';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/singlepost/:postID" element={<SinglePost />} />
        <Route path="/updatepost/:postID" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
