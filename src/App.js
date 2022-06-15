import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Questions from "./Components/questions";
import Home from "./Pages/home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/learning-path" element={<Home />}></Route>
        <Route path="/learning-path/js" element={<Questions />}></Route>
        <Route path="/learning-path/js" element={<Questions />}></Route>
        <Route path="/learning-path/question" element={<Questions />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
