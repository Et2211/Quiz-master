import { useState } from "react"
import { Link } from "react-router-dom"

type Props = {

}

function QuizComplete({} :Props) {

    return (
      <>
      <div className="row justify-content-center align-items-center">
        <div className="col text-center">   
          <h1>Well done, you scored</h1>
          <Link to={'/'}>
            <button className="btn btn-primary mt-5">Start again?</button>
          </Link>
        </div>
      </div>
      </>
  )
}

export default QuizComplete