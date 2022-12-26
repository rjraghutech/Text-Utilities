import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Textform from './components/Textform';

function App() {
  const [mode, setMode] = useState('light');
  const [darkbtn, setDarkbtn] = useState("Dark Mode");
  const [darkObject, setDarkObject] = useState({
    color: "black",
    backgroundColor: "white"
  });

  let toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      setDarkbtn('Light Mode');
      setDarkObject({
        color: "white",
        backgroundColor: "black"
      })
    }
    else{
      setMode('light');
      setDarkbtn('Dark Mode');
      setDarkObject({
        color: "black",
        backgroundColor: "white"
      })
    }
  }
  return (
    <>
      <Header brand="Utilities" mode={mode} toggleMode={toggleMode} darkbtn={darkbtn}/>
      <Textform heading="Text Analyzer" darkObject={darkObject} toggleMode={toggleMode}/>
    </>
  );
}

export default App;
