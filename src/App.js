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
    // <Router>
    //   <div className="main">
    //     <div>
    //       <Route exact path='/' component={HomePage} />
    //     </div>
    //     <div>
    //       <Route exact path='/detail' component={HomePage} />
    //     </div>
    //   </div>
    // </Router>
  );
}

export default App;