import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { LoginComponents } from "./Components/LoginPages/LoginComponents";
import { VotingComponents } from "./Components/VotingPage/VotingComponents";
function App() {
  const [flagToShowPage, setFlagToShowPage] = useState(true);
  const [dataUser, setDataUser] = useState({});
  const [showBTNS, setShowBTNS] = useState(true)
  const [usersData, setUsersData] = useState([]);

 

  function usersDataHandlr(data) {
    setUsersData([...usersData, data]);
    localStorage.setItem("UsersVoting", JSON.stringify([...usersData]));
    console.log(usersData)

  }
  console.log(usersData);
  function showBTNSHandlr(data) {
    setShowBTNS(data)
  }

  function dataUserHandlr(data) {
    // setDataUser(data);  
    setDataUser({ ...data });
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
        <VotingComponents flagHandler={flagHandler}   usersData={usersData} usersDataHandlr={usersDataHandlr} showBTNSHandlr={showBTNSHandlr} showBTNS={showBTNS} flagToShowPage={flagToShowPage} dataUser={dataUser}></VotingComponents>
      </div>
     
    </div>
  )
}

export default App
