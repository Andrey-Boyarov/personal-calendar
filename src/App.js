import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Separator from "./components/header/Separator";
import Body from "./components/body/Body";

function App() {
  return (
    <div className="App">
      <Separator/>
      <Header/>
      <Separator/>
      <Body/>
    </div>
  );
}

export default App;
