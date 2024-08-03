import React from 'react';
import './Card.css';

const Card = ({ title, question, answer }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{title}</h2>
        <h3>{question}</h3>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Card;
