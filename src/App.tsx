import { useEffect, useState } from "react"
import QuestionContainer from "./components/QuestionContainer/QuestionContainer" 
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



interface questionArray {
  question: string,
  answers: Array<answerArray>,
}

interface answerArray {
  phrasing: string,
  isCorrect: boolean,
}

function App() {
  //  make http request to /questions endpoint
  const [questions, setQuestions] = useState<questionArray[] | []>([{question:'', answers:[]}])

  useEffect(()=>{
    (fetch('/questions.json').then((response)=>{
      response.json().then(res=>setQuestions(res))
    }))
  }, [])

  
  return (
    <div className="App container">
        <QuestionContainer questions ={questions} />
    </div>
  )
}

export default App
