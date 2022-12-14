import {useState} from 'react'
import {MdHome,MdTrendingUp,MdLiveTv,MdCollectionsBookmark,
MdSearch,MdPerson} from 'react-icons/md'
import './css/Header.css'
import request from './Request'



export const API_KEY = "d66ff5af";

const Header = ({setSelectedOption,setLogin,userLogin,setUserLogin,setCollection}) => {
  



  const onSearch = (e) => {
      let _value = "";
       _value = e.target.value
      setSelectedOption(request.searchMovies + _value);

      if(_value === "") {
        setSelectedOption(request.fetchTrending)
      }

    
    
  };
  
 


  
  return (
    <div className='header'>

        <div className='header__icons'>

              {userLogin === true ?  <div className="header__icon profil">Berat Özgen</div> :  <div className="header__icon profil">Misafir</div>}          

            <div onClick={()=> setSelectedOption(request.fetchAnimation)} className='header__icon'>
            <MdHome  size={"30px"}/>
            <p>Home</p>
            </div>

            <div onClick={()=> setSelectedOption(request.fetchTrending)} className='header__icon'>
            <MdTrendingUp  size={"30px"}/>
            <p>Trending</p>
            </div>

            <div onClick={()=> setSelectedOption(request.fetchTV)} className='header__icon'>
            <MdLiveTv size={"30px"}/>
            <p>Verified</p>
            </div>

            <div onClick={()=> setCollection(true)} className='header__icon'>
            <MdCollectionsBookmark size={"30px"}/>
            <p>Collections</p>
            </div>

            <div className='header__icon'>
              
              <MdSearch size={"30px"}/>
               <p> <input type="text" className="input" placeholder="Search Movie" onChange={onSearch}/> </p>      
            </div>

            <div onClick={() => setLogin(true)} className='header__icon'>
            <MdPerson size={"30px"}/>
            <p>Account</p>
            
            </div>
            
        </div>
        <span data-text="Awesome" className="button">
            <span className="actual-text">BeratMOVİE</span>
            <span className="hover-text" aria-hidden="true">BeratMOVİE</span>
        </span>
    </div>
  )
}

export default Header