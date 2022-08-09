import { Result } from 'antd';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import request from './components/Request';
import Results from './components/Results';
import Login from './login/Login'


function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchTrending)
  const [login,setLogin] = useState(false)

  if (login) {
    return <Login login={login} setLogin={setLogin}/>
  } 
  
  return (
    <div className="App">
      <Header login={login} setLogin={setLogin} setSelectedOption={setSelectedOption} />
      <Navbar setSelectedOption={setSelectedOption} />
      <Results  selectedOption={selectedOption} />
    </div>
  );
}

export default App;
