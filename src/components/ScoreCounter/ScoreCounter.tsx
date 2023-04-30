import { useState } from "react"

type Props = {
  score: number,
  questionCount:number
}

function ScoreCounter({score, questionCount} :Props) {



    return (
      <>
        <h3>Score {score}/{questionCount}</h3>

      </>
  )
}

export default ScoreCounter