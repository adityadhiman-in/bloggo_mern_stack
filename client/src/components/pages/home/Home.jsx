import React from 'react';
import Card from './Card';
import './Home.css';

const Home = () => {
  const cardData = [
    {
      title: 'Card 1',
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.'
    },
    {
      title: 'Card 2',
      question: 'What is a component?',
      answer: 'A component is a reusable piece of UI.'
    },
    {
      title: 'Card 3',
      question: 'What is state in React?',
      answer: 'State is an object that determines the behavior and rendering of a component.'
    },
    {
      title: 'Card 4',
      question: 'What are props?',
      answer: 'Props are inputs to components that allow data to be passed from one component to another.'
    }
  ];

  return (
    <div className="home-page">
      <h1>Welcome to the HomePage</h1>
      <div className="card-grid">
        {cardData.map((card, index) => (
          <Card 
            key={index}
            title={card.title}
            question={card.question}
            answer={card.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
