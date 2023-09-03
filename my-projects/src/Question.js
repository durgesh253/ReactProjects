import React, { useState } from 'react';

const Question = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={toggleInfo}>
          {showInfo ? '-' : '+'}
        </button>
      </header>
 
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
