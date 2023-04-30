import { useState, useEffect } from "react"
import AnswerModal from "./../AnswerModal/AnswerModal"
import styles from './QuestionContainer.module.scss'


type Props = {
  questions: Array<questionArray>,
  score: number,
  setScore: Function,
  questionNumber: number
  nextQuestion: Function,
  setIsplaying: Function
}

interface questionArray {
  question: string,
  answers: Array<answerArray>,
}

interface answerArray {
  phrasing: string,
  isCorrect: boolean,
}

function QuestionContainer({questions, score, setScore, questionNumber, nextQuestion, setIsplaying}:Props) {

  const [correctAnswer, setCorrectAnswer] = useState<boolean>(false)

    const question:string = questions[questionNumber].question
    const answers:Array<answerArray> = questions[questionNumber].answers

    const answerClicked = (event : object, isCorrect:boolean) => {
      setCorrectAnswer(isCorrect)
      setScore(score + (isCorrect ? 1 : 0))
      setIsplaying(false)
    }

    return (
    <div>
        <h1>{question}</h1>

        <div className="row justify-contnent-center align-items-center">

        {answers.map((answer)=>{
          return(
            <div className="col-6 p-3">
              <div className="answers text-center">
                <button className={"btn btn-primary " + styles.btn_answers} data-bs-toggle="modal" data-bs-target="#AnswerModal" onClick={(event)=>answerClicked(event, answer.isCorrect)}>
                  {answer.phrasing}
                </button>
              </div>
            </div>
            )
          })}
        </div>
        <AnswerModal correctAnswer={correctAnswer} nextQuestion={nextQuestion}/>
    </div>
  )
}

export default QuestionContainer