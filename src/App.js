import './App.css';
import Creator from "./components/Creator";
import Login from "./components/Login";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <div className="App">
          <BrowserRouter>
                <Routes>
                    <Route path="/api/creator" element={<Creator/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
