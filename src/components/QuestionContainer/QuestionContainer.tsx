import { useState } from "react"


type Props = {
  questions: Array<questionArray>,
}

interface questionArray {
  question: string,
  answers: Array<answerArray>,
}

interface answerArray {
  phrasing: string,
  isCorrect: boolean,
}

function QuestionContainer({questions}:Props) {

  const [questionNumber, setQuestionNumber] = useState<number>(0)

    console.log(questions)

    const question:string = questions[questionNumber].question
    const answers:Array<answerArray> = questions[questionNumber].answers

    return (
    <div>
        <h1>{question}</h1>

        <div className="row justify-contnent-center align-items-center">

        {answers.map((answer)=>{
          return(
            <div className="col-6 p-3">
              <div className="answers text-center">
                <button className="btn btn-primary">
                  {answer.phrasing}
                </button>
              </div>
            </div>
            )
          })}
        </div>
    </div>
  )
}

export default QuestionContainer