import React, { useState } from 'react';
import { Data } from './Data';
import Question from './Question';

function App() {
  const [questions, setQuestions] = useState(Data);

  return (
    <main>
      <div className='container'>
        <h2>React Accordion</h2>
        <section className='info'>
          {questions.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;


