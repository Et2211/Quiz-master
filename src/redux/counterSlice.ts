import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface CounterState {
    score: number
}

// Define the initial state using that type
const initialState: CounterState = {
    score: 0,
}

export const counterSlice = createSlice({
  name: 'score',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.score += 1
    },
    decrement: (state) => {
      state.score -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.score += action.payload
    },
    reset: (state, action: PayloadAction<number>) => {
      state.score = action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.score

export default counterSlice.reducer