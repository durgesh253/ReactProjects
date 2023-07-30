import { createSlice } from "@reduxjs/toolkit";



const quizslice = createSlice({
    name:"quiz",
     initialState : {
        questions : [],
        answer : [],
        score : 0,
    },
    reducers:{
       setQuestion:(state,action) => {
        state.questions = action.payload;
       },
       submitAnswer :(state,action) => {
        state.answer.push(action.payload);
       },
       calculateScore: (state) => {
        state.score = state.answer.reduce(
          (score, answer, index) =>
            score + (answer === state.questions[index].ans ? 1 : 0),
          0
        );
      },
      resetQuiz: (state) => {
        state.answer = [];
        state.score = 0;
      },

    }
})
export const {setQuestion,submitAnswer,calculateScore,resetQuiz} = quizslice.actions
export default quizslice.reducer