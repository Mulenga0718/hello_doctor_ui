import "./App.css";
import "./resources/img/headerLogo3.png";
import "./resources/css/bootstrap.min.css";
import "./resources/font-awesome/css/font-awesome.css";
import "./resources/css/plugins/toastr/toastr.min.css";
import "./resources/js/plugins/gritter/jquery.gritter.css";
import "./resources/css/animate.css";
import "./resources/css/style.css";
import LoginForm from "./login/loginForm.tsx";
import Main from "./main/main.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./medi/chart.tsx";

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <Routes>
          <Route element={<LoginForm/>}  path="/">
            
          </Route>
          <Route element={<Main/>} path="/ddit/*" >
            
          </Route>
        </Routes>
          <div className="iFrame">
        <Routes>
        <Route element={<Chart/>} path="/ddit/medi/chart">

        </Route>

        </Routes>
        </div>
    </BrowserRouter>
      </div>
  );
}

export default App;
