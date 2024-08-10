import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({post}) => {
  const navigate = useNavigate();

  return (
    <div onClick={()=> navigate(`/singlepost/${post?._id}`)} className="card">
      <div className="card-content">
        <h2>{post.topic}</h2>
        <h3>{post.question}</h3>
        <p>{post.answer}</p>
      </div>
    </div>
  );
};

export default Card;
