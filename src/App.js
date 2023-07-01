import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduce from "./pages/introduce/Introduce";
import Quizz from "./pages/quiz/Quizz";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Introduce />} />
          <Route path="/quiz/:difficulty/:amount" element={<Quizz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
