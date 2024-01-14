
import Navbar from './components/Navbar';
import Form from './components/Form';
import './App.css';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') // state syntax to let me know whether dark mode is enabled or not
  const [btnText, setBtnText] = useState("Enable Dark Mode")
  const [btnC, setBtnC] = useState('secondary')
  const [alert, setAlert] = useState(null)

  

  function showAlert(message,type) {
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(()=>{
      setAlert(null)} ,2000)
  }
  function toggleMode() {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(59 65 71)';
      // document.getElementById('about').style.backgroundColor='rgb(59 65 71)'
      // document.getElementsByClassName('accordion-button').style.color= 'white'
      // document.body.txextArea.style.border = '2px solid rgb(33,37,41)'
      setBtnText("Enable Light Mode")
      setBtnC('dark')
      showAlert("Dark Mode has been enabled","success")
    } 
    else{
      setMode('light')
      document.body.style.backgroundColor = '#e9ecef';
      // document.getElementById('about').style.backgroundColor='#e9ecef'
      // document.getElementsByClassName('accordion-button').style.color= '#212529'
      // document.body.textArea.style.border = '2px solid #6c757d'
      setBtnText("Enable Dark Mode")
      setBtnC('secondary')
      showAlert("Light Mode has been enabled","success")
    }
      
  }
  return (
    <>
      <BrowserRouter>
        <div >
      
          {/* <Navbar/> --> for setting default props */}
          <Navbar title="TextEdit 1.0" mode={mode} toggleMode={toggleMode} btn={btnText}/> 
          <Alert alert={alert}/>
          <div className="container  my-4">
            <Routes>
              <Route exact path="/about" element={<About mode={mode}/>}></Route>
                <Route exact path="/" element={<Form heading="Enter text below" mode={mode} btnC={btnC} showAlert={showAlert}/>}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
