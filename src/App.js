import "./App.css";
import HomePage from "./components/HomePage/homepage";
import Detail from "./components/Detail/detail";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={<HomePage />} >
          </Route>
          <Route path="/detail"
            element={<Detail />} >
          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;