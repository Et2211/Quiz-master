function Questions() {
  //  make http request to /questions endpoint
  const [questions, setQuestions] = useState<questionArray[] | []>([{question:'', answers:[]}])
  const [score, setScore] = useState<number>(0)
  const [timeUp, setTimeUp] = useState<boolean>(false)
  const [questionNumber, setQuestionNumber] = useState<number>(0)
  const [key, setKey] = useState<number>(0)
  const [isPlaying, setIsplaying] = useState<boolean>(true)
  useEffect(()=>{
    (fetch('/questions.json').then((response)=>{
      response.json().then(res=>setQuestions(res))
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
    <div className="App container">
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
          {!timeUp && <div>
            <QuestionContainer questions={questions} score={score} setScore={setScore} questionNumber={questionNumber} nextQuestion={nextQuestion} setIsplaying={setIsplaying}/>
          </div>}
        </div>
      </div>

      <TimedOutModal nextQuestion={nextQuestion}/>
    </div>

  )
}

export default Questions
