import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateScore, resetQuiz, setQuestion, submitAnswer } from './redux/QuizSlice';
import { quizdata } from './Data';

function Quiz() {
    const dispatch = useDispatch();
    const {questions,answer,score} = useSelector((state) => state.quiz);
    console.log(questions);

    useEffect(() => {
        dispatch(setQuestion(quizdata));
    },[dispatch])

   const handleanswersubmit = (answer) => {
    dispatch(submitAnswer(answer))

   };
   const handleSubmit = () => {
    dispatch(calculateScore());
   }
 
   const handleReset = () => {
    dispatch(resetQuiz());
   }
  return (
    <>
     <div className="container my-5">
      <h1 className="text-center">Your Score: {score}</h1>
   
    <div>{
        questions.map((items,index) => {
            return(
                <div key={index} className="card my-3 p-3 shadow">
                    <h3 className='mb-3'>{items.question}</h3>
                    <ul className="list-unstyled">
                      <li onClick={() => handleanswersubmit('ans1')}><button  className="btn btn-light">{items.a}</button></li>
                       <li onClick={() => handleanswersubmit('ans2')}><button  className="btn btn-light">{items.b}</button></li> 
                        <li onClick={() => handleanswersubmit('ans3')}><button className="btn btn-light">{items.c}</button></li>
                        <li onClick={() => handleanswersubmit('ans4')}><button className="btn btn-light">{items.d}</button></li>
                    </ul>
                    
                </div>
            )
            
        })}
        <div className="text-center">
          <button className="btn-submit m-2" onClick={handleSubmit}>
            Submit
          </button>
          <button className="btn-reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      
    </div>
    </div>
    </>
  )
}

export default Quiz
