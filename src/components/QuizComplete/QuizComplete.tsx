import { useState } from "react"
import { Link } from "react-router-dom"
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from './../../redux/store'
import { reset } from "../../redux/counterSlice"
import { getQuestions } from "../../redux/questionSlice"
import { useDispatch } from "react-redux"
import AnswerBreakdown from "../AnswerBreakdown.tsx/AnswerBreakdown"

interface questionArray {
  question: string,
  answers: Array<answerArray>,
  isCorrect: boolean
}

interface answerArray {
  phrasing: string,
  isCorrect: boolean,
}

type Props = {

}

function QuizComplete({} :Props) {

  const dispatch = useDispatch()
  const score = useSelector((state: RootState)=>state.score.score)
  const questions : Array<questionArray> = useSelector(getQuestions)

    return (
      <>
      <div className="row justify-content-center align-items-center">
        <div className="col text-center">   
          <h1>Well done, you scored {score}</h1>
          <Link to={'/'}>
            <button className="btn btn-primary mt-5" onClick={()=>dispatch(reset(0))}>Start again?</button>
          </Link>
        </div>
      </div>

      <div className="row justify-content-center align-items-center">
        <div className="col text-center">   
          <AnswerBreakdown questions={questions} />
        </div>
      </div>
      </>
  )
}
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default QuizComplete