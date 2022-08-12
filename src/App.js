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
  const [removeBasketS,setRemoveBasketS] = useState()
  const [moveis,setMovies] = useState()



  if (login) {
    return <Login userLogin={userLogin} setUserLogin={setUserLogin} login={login} setLogin={setLogin}/>
  } else if (collection) {
    return <Collection moveis={moveis} setMovies={setMovies} setRemoveBasketS={setRemoveBasketS} removeBasketS={removeBasketS} setCollection={setCollection} movieList={movieList} setMovieList={setMovieList}/>
  }
  
  return (
    <div className="App">
      <Header setCollection={setCollection} userLogin={userLogin} setUserLogin={setUserLogin} login={login} setLogin={setLogin} setSelectedOption={setSelectedOption} />
      <Navbar setSelectedOption={setSelectedOption} />
      <Results moveis={moveis} setMovies={setMovies} setRemoveBasketS={setRemoveBasketS} removeBasketS={removeBasketS} movieList={movieList} setMovieList={setMovieList} selectedOption={selectedOption} />
    </div>
  );
}

export default App;
