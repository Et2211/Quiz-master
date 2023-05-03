import { useState, useEffect } from "react"
import AnswerModal from "../AnswerModal/AnswerModal"
import styles from './Questions.module.scss'
import { increment } from "../../redux/counterSlice"
import { useDispatch } from "react-redux"


type Props = {
  questions: Array<questionArray>,
  score: number,
  questionNumber: number
  nextQuestion: Function,
  setIsplaying: Function,
}

interface questionArray {
  question: string,
  answers: Array<answerArray>,
}

interface answerArray {
  phrasing: string,
  isCorrect: boolean,
}

function Questions({questions, score, questionNumber, nextQuestion, setIsplaying}:Props) {

  const dispatch = useDispatch()

  const [correctAnswer, setCorrectAnswer] = useState<boolean>(false)

    const question:string = questions[questionNumber].question
    const answers:Array<answerArray> = questions[questionNumber].answers

    const lastQuestion : boolean = questions.length === questionNumber + 1
  
    const answerClicked = (isCorrect:boolean) => {
      setCorrectAnswer(isCorrect)
      isCorrect && dispatch(increment())
      setIsplaying(false)
    }

    return (
    <div>
        <h1>{question}</h1>

        <div className="row justify-contnent-center align-items-center">

        {answers.map((answer : answerArray, index: number)=>{
          return(
            <div className="col-6 p-3" key={index}>
              <div className="answers text-center">
                <button className={"btn btn-primary " + styles.btn_answers} data-bs-toggle="modal" data-bs-target="#AnswerModal" onClick={(event)=>answerClicked(answer.isCorrect)}>
                  {answer.phrasing}
                </button>
              </div>
            </div>
            )
          })}
        </div>
        <AnswerModal correctAnswer={correctAnswer} nextQuestion={nextQuestion} lastQuestion={lastQuestion}/>
    </div>
  )
}

export default Questions