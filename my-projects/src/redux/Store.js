import QuizSlice from "./QuizSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer :{
      quiz : QuizSlice,
    }
})