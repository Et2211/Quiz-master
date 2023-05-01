import { useState } from "react"
import { Link } from "react-router-dom"
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from './../../redux/store'

type Props = {

}

function QuizComplete({} :Props) {

  const score = useSelector((state: RootState)=>state.score.score)


    return (
      <>
      <div className="row justify-content-center align-items-center">
        <div className="col text-center">   
          <h1>Well done, you scored {score}</h1>
          <Link to={'/'}>
            <button className="btn btn-primary mt-5">Start again?</button>
          </Link>
        </div>
      </div>
      </>
  )
}
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default QuizComplete