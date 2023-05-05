import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'


interface questionState {
  questions: Array<questionArray>
}

interface questionArray {
  question: string,
  answers: Array<answerArray>,
}

interface answerArray {
  phrasing: string,
  isCorrect: boolean,
}

const initialState: questionState = {
  questions: [{question:'', answers:[]}],
}

export const questionSlice = createSlice({
  name: 'quesions',
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      console.log(action)
      state.questions = action.payload
    }
  },
})

export const { setQuestions } = questionSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getQuestions = (state: RootState) => state.questions.questions

export default questionSlice.reducer