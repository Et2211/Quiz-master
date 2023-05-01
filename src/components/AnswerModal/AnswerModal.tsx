import { useState } from "react"
import './AnswerModal.module.scss'
import { Link } from "react-router-dom"

type Props = {
  correctAnswer: boolean,
  lastQuestion: boolean,
  nextQuestion: Function 
}

function AnswerModal({correctAnswer, nextQuestion, lastQuestion} :Props) {



    return (
      <>

      <div className="modal fade" id="AnswerModal" data-bs-backdrop="static"  tabIndex={-1} aria-labelledby="AnswerModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="AnswerModalLabel">{correctAnswer ? 'Correct answer!' : 'Wrong answer!'}</h5>
            </div>
            <div className="modal-body">
            {correctAnswer ? 'You selected the correct answer!' : 'You selected the wrong answer!'}
            </div>
            <div className="modal-footer">
              {lastQuestion ? 
              <Link to={'/completed'}>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>nextQuestion()}>Finish Quiz</button>
              </Link>
              :
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>nextQuestion()}>Next Question</button>
              }
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default AnswerModal