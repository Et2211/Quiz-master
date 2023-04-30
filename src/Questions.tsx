function Questions() {
  //  make http request to /questions endpoint
  const [questions, setQuestions] = useState<questionArray[] | []>([{question:'', answers:[]}])
  const [questionNumber, setQuestionNumber] = useState<number>(0)
  useEffect(()=>{
    (fetch('/questions.json').then((response)=>{
      response.json().then(res=>setQuestions(res))
    }))
  }, [])
    <div className="App container">
      <div className="row mt-5">
        <div className="col">
          {!timeUp && <div>
            <QuestionContainer questions={questions} score={score} setScore={setScore} questionNumber={questionNumber} nextQuestion={nextQuestion} setIsplaying={setIsplaying}/>
          </div>}
        </div>
      </div>

    </div>