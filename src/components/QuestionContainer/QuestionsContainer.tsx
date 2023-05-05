import { useEffect, useState } from "react"
import QuestionContainer from "../Questions/Questions" 
import 'bootstrap/dist/css/bootstrap.min.css';
import ScoreCounter from "../ScoreCounter/ScoreCounter";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import TimedOutModal from "../TimerOutModal/TimedOutModal";
import { Modal } from 'bootstrap'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { setQuestions, getQuestions } from "../../redux/questionSlice";


type timeProps = {
  remainingTime: number
}

function QuestionsContainer() {
  const [timeUp, setTimeUp] = useState<boolean>(false)
  const [questionNumber, setQuestionNumber] = useState<number>(0)
  const [key, setKey] = useState<number>(0) //used to reset countdown timer
  const [isPlaying, setIsplaying] = useState<boolean>(true)
  const [ready, setReady] = useState<boolean>(false)
  
  const dispatch : Function = useDispatch()

  const score = useSelector((state: RootState)=>state.score.score)
  const questions = useSelector(getQuestions)

  useEffect(()=>{
    (fetch('/questions.json').then((response)=>{
      response.json().then(res=>{
        dispatch(setQuestions(res))
        setReady(true)
      })
    }))
  }, [])

  const renderTime = ({ remainingTime } : timeProps) => {
    if (remainingTime === 0) {
      return <div className="timer">Time's up!</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

  const resetTimer = () => {
    setKey(prevKey => prevKey + 1)
  }

  const timerComplete = () => {
    setTimeUp(true)
    const options : object = {
      backdrop: 'static'
    }

    var timedOutModal : Modal = new Modal(document.getElementById('timedOutModal') as HTMLElement, options)
    timedOutModal.show()
  }
  const nextQuestion : Function = () => {
    setQuestionNumber(questionNumber + 1)
    resetTimer()
    setIsplaying(true)
    setTimeUp(false)
  }
  
  return (
    <>
    {ready && <div>
      <div className="row justify-content-center align-items-center text-center">
        <div className="col">
          <CountdownCircleTimer key={key} isPlaying={isPlaying} duration={10} colors={['#004777', '#F7B801', '#A30000', '#A30000']} colorsTime={[7, 5, 2, 0]} onComplete={()=>{timerComplete()}} size={180}>{renderTime}</CountdownCircleTimer>
        </div>
        <div className="col">
          <ScoreCounter score={score} questionCount={questions.length}/>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          {!timeUp &&  <div>
            <QuestionContainer questions={questions} score={score} questionNumber={questionNumber} nextQuestion={nextQuestion} setIsplaying={setIsplaying}/>
          </div>}
        </div>
      </div>
      <TimedOutModal nextQuestion={nextQuestion}/>
    </div>}
    </>
  )
}
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default QuestionsContainer
