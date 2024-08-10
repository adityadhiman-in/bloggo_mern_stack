import React, { useEffect, useState } from 'react';
import './CreatePost.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const CreatePost = () => {
  const [topic, setTopic] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();
  const { postID } = useParams();

  const getPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/getsinglepost?postID=${postID}`);
      const post = response.data.responseData;
      setTopic(post?.topic || '');
      setQuestion(post?.question || '');
      setAnswer(post?.answer || '');
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (postID) {
      getPosts();
    }
  }, [postID]); // Add postID as a dependency

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      if(postID){
        const response = await axios.put("http://localhost:3000/updatepost", {
          postID,
          topic,
          question,
          answer
        });
      if (response.data.responseData) {
        navigate(`/singlepost/${postID}`)
      }
    }
      else{
      const response = await axios.post("http://localhost:3000/createpost", {
        topic,
        question,
        answer
      });
      
      if (response.data.responseData) {
        navigate('/'); // Redirect to the main page
      }
    }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-post">
      <h1>{postID ? 'Update the Post' : 'Create a new Post'}</h1>
      <form onSubmit={handleSubmit} className="create-post-form">
        <div className="form-group">
          <label htmlFor="title">Topic:</label>
          <input
            type="text"
            id="title"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="question">Question:</label>
          <textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="answer">Answer:</label>
          <textarea
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">{postID ? 'Update Post' : 'Submit Post'}</button>
      </form>
    </div>
  );
};

export default CreatePost;
