import { useState } from "react"
import { Link } from "react-router-dom"

type Props = {

}

function StartPage({} :Props) {



    return (
      <>
      <div className="row justify-content-center align-items-center">
        <div className="col text-center">   
          <h1>Ready to start?</h1>
          <Link to={'/questions'}>
            <button className="btn btn-primary mt-5">Start</button>
          </Link>
        </div>
      </div>
      </>
  )
}

export default StartPage