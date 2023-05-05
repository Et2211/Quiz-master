import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'


interface questionState {
  questions: Array<questionArray>
}

interface questionArray {
  question: string,
  answers: Array<answerArray>,
  isCorrect: boolean
}

interface answerArray {
  phrasing: string,
  isCorrect: boolean,
}

const initialState: questionState = {
  questions: [{question:'', answers:[], isCorrect: false}],
}

export const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload
    },
    markAnswer: (state, action : PayloadAction<{questionNumber: number, isCorrect: boolean}>) => {
      state.questions[action.payload.questionNumber].isCorrect = action.payload.isCorrect
    }
  },
})

export const { setQuestions, markAnswer } = questionSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getQuestions = (state: RootState) => state.questions.questions

export default questionSlice.reducer