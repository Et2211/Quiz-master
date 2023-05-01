import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questions from './Questions'
import './index.css'
import './style.scss'
import NoPage from "./components/NoPage/NoPage";
import StartPage from "./components/StartPage/StartPage";
import QuizComplete from "./components/QuizComplete/QuizComplete";

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/completed" element={<QuizComplete/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Root />);