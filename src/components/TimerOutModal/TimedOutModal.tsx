import { useState } from "react"
import styles from './TimedOutModal.module.scss'

type Props = {
  nextQuestion: Function 
}

function TimedOutModal({ nextQuestion } :Props) {



    return (
      <>

      <div className="modal fade" id="timedOutModal" data-bs-backdrop="static" tabIndex={-1} aria-labelledby="timedOutModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="timedOutModalLabel">Timed Out</h5>
            </div>
            <div className="modal-body">
             You ran out of time!
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>nextQuestion()}>Next Question</button>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default TimedOutModal