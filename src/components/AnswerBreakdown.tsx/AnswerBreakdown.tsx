import styles from './AnswerBreakdown.module.scss'

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
  questions : Array<questionArray>
}

const getAnswer : Function = (question: questionArray) => {
  const answers = question.answers
  return answers.find(answer => answer.isCorrect == true)
}

function AnswerBreakdown({questions} :Props) {
  return (
    <>
      <div className='row mt-5 text-start'>
        <div className='col-6'>
          <h2>Question</h2>
          </div>
        <div className='col-2'>
          <h3>Your score</h3>
        </div>
        <div className='col-2'>
          <h3>Correct Answer</h3>
        </div>
      </div>

      {questions.map(question=>{
        const correctAnswer = getAnswer(question)
        return(
          <>

          <div className='row mt-4 text-start'>
            <div className='col-6'>
              <h3>{question.question}</h3>
              </div>
            <div className='col-2'>
              {question.isCorrect ? <i className={"fa-solid fa-check " + styles.correct}></i> : <i className={"fa-solid fa-xmark " + styles.incorrect}></i>}
            </div>
            <div className='col-2'>
              <h4>{correctAnswer.phrasing}</h4>
            </div>
          </div>
          </>
          )
      })}
    </>
  )
}
export default AnswerBreakdown