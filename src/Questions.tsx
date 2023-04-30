function Questions() {
  //  make http request to /questions endpoint
  const [questions, setQuestions] = useState<questionArray[] | []>([{question:'', answers:[]}])
  const [score, setScore] = useState<number>(0)
  const [timeUp, setTimeUp] = useState<boolean>(false)
  const [questionNumber, setQuestionNumber] = useState<number>(0)
  useEffect(()=>{
    (fetch('/questions.json').then((response)=>{
      response.json().then(res=>setQuestions(res))
    }))
  }, [])
  const timerComplete = () => {
    setTimeUp(true)
    const options : object = {
      backdrop: 'static'
    }

    var timedOutModal : Modal = new Modal(document.getElementById('timedOutModal') as HTMLElement, options)
    timedOutModal.show()
  }
    <div className="App container">
        <div className="col">
          <ScoreCounter score={score} questionCount={questions.length}/>
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
