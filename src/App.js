import { Result } from 'antd';
import { useState } from 'react';
import './App.css';
import Collection from './components/Collection';
import Header from './components/Header';
import Navbar from './components/Navbar';
import request from './components/Request';
import Results from './components/Results';
import Login from './login/Login'


function App() {
  const [movieList ,setMovieList] = useState([])
  const [selectedOption, setSelectedOption] = useState(request.fetchTrending)
  const [login,setLogin] = useState(false)
  const [userLogin,setUserLogin] = useState(false)
  const [collection, setCollection] = useState(false);
  const [moveis,setMovies] = useState()
  const [onProfil,setOnProfil] = useState(false)


console.log("sdf")

  if (login) {
    return <Login onProfil={onProfil} setOnProfil={setOnProfil} userLogin={userLogin} setUserLogin={setUserLogin} login={login} setLogin={setLogin}/>
  } else if (collection) {
    return <Collection moveis={moveis} setMovies={setMovies} setCollection={setCollection} movieList={movieList} setMovieList={setMovieList}/>
  }
  
  return (
    <div className="App">
      <Header setCollection={setCollection} userLogin={userLogin} setUserLogin={setUserLogin} login={login} setLogin={setLogin} setSelectedOption={setSelectedOption} />
      <Navbar setSelectedOption={setSelectedOption} />
      <Results onProfil={onProfil}  moveis={moveis} setMovies={setMovies}  movieList={movieList} setMovieList={setMovieList} selectedOption={selectedOption} />
    </div>
  );
}

export default App;
