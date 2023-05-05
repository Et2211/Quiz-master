import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice'
import { questionSlice } from './questionSlice'
// ...

export const store = configureStore({
  reducer: {
    score: counterSlice.reducer,
    questions: questionSlice.reducer,

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch