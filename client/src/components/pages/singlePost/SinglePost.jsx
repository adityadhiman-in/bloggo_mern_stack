import React, { useEffect, useState } from 'react';
import './SinglePost.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const SinglePost = () => {
  const [post, setPost] = useState(null);
  const { postID } = useParams();
  const navigate = useNavigate();

  const getPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/getsinglepost?postID=${postID}`);
      setPost(response.data.responseData);
      
    } catch (err) {
      console.error(err);
    }
  };
  const deletePosts = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/deletepost`,
        { data: { postID: postID } }
    );
      if(response.data.responseData){
        navigate('/')}
      setPost(response.data.responseData);
    } catch (err) {
      console.error(err);
    }
  };
  const updatePost = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/updatepost`,
        { data: { postID: postID } }
    );
      if(response.data.responseData){
        navigate('/')}
      setPost(response.data.responseData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, [postID]);

  return (
    <div className='singlePost'>
      <h1>{post?.topic || 'Loading...'}</h1>
      <h2>{post?.question || 'Loading...'}</h2>
      <p>{post?.answer || 'Loading...'}</p>
      <div className='btns'>
      <button onClick={deletePosts}>Delete</button>
      <button onClick={()=> navigate(`/updatepost/${postID}`)}>Edit</button>
      </div>
    </div>
  );
};

export default SinglePost;
