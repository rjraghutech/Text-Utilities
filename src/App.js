import React,{useState} from 'react';

import './App.css';
import Alert from './components/Alert';
import Header from './components/Header';
import Textform from './components/Textform';

function App() {
  const [mode, setMode] = useState('light');
  const [darkbtn, setDarkbtn] = useState("Dark Mode");
  const [darkObject, setDarkObject] = useState({
    color: "black",
    backgroundColor: "white"
  });
  const [alert, setAlert] = useState(null);
  let toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      setDarkbtn('Light Mode');
      setDarkObject({
        color: "white",
        backgroundColor: "black"
      })
      document.body.style.backgroundColor = 'black';
      showAlert('Dark Mode Enabled..!','success');
    }
    else{
      setMode('light');
      setDarkbtn('Dark Mode');
      setDarkObject({
        color: "black",
        backgroundColor: "white"
      })
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Enabled..!','success');
    }
  }

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Header brand="Utilities" mode={mode} toggleMode={toggleMode} darkbtn={darkbtn} showAlert={showAlert}/>
      <Alert alert={alert}/>
      <div>
        <Textform heading="Text Analyzer" darkObject={darkObject} toggleMode={toggleMode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
