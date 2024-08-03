import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/home/Home';
import CreatePost from './components/pages/newPost/CreatePost';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
