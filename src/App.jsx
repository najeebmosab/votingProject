import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { LoginComponents } from "./Components/LoginPages/LoginComponents";
import { VotingComponents } from "./Components/VotingPage/VotingComponents";
function App() {
  const [flagToShowPage, setFlagToShowPage] = useState(true);
  const [dataUser, setDataUser] = useState({});

  function dataUserHandlr(data) {
    // setDataUser(data);  
    setDataUser({...data});  
  }

  function flagHandler(newFlag) {
    setFlagToShowPage(newFlag);
  }
  console.log(dataUser);
  return (
    <div className="App">
      <div className={flagToShowPage ? "showLoginPage" : "hiddenLoginPage"}>
        <LoginComponents flag={flagToShowPage} dataUser={dataUserHandlr} newFlag={flagHandler}></LoginComponents>
      </div>

      <div className={!flagToShowPage ? "showLoginPage" : "hiddenLoginPage"}>
        <VotingComponents dataUser={dataUser}></VotingComponents>
      </div>
    </div>
  )
}

export default App
