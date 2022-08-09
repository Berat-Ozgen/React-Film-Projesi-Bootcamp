import React from 'react'
import { useState } from 'react'
import './css/Navbar.css'
import request from './Request'

const Navbar = ({setSelectedOption}) => {

   const [activeKey,setActiveKey] = useState(0)
   


  return (
    <div className="navbar">
    <h3
      className={activeKey === 1 && `active`}
      onClick={() => {
        setActiveKey(1);
        setSelectedOption(request.fetchTrending);
      }}
    >
      Trending
    </h3>
    <h3
      className={activeKey === 2 && `active`}
      onClick={() => {
        setActiveKey(2);
        setSelectedOption(request.fetchTopRated);
      }}
    >
      Top Rated
    </h3>
    <h3
      className={activeKey === 3 && `active`}
      onClick={() => {
        setActiveKey(3);
        setSelectedOption(request.fetchActionMovies);
      }}
    >
      Action
    </h3>
    <h3
      className={activeKey === 4 && `active`}
      onClick={() => {
        setActiveKey(4);
        setSelectedOption(request.fetchComedyMovies);
      }}
    >
      Comedy
    </h3>
    <h3
      className={activeKey === 5 && `active`}
      onClick={() => {
        setActiveKey(5);
        setSelectedOption(request.fetchHorroMovies);
      }}
    >
      Horror
    </h3>
    <h3
      className={activeKey === 6 && `active`}
      onClick={() => {
        setActiveKey(6);
        setSelectedOption(request.fetchRomanticMovies);
      }}
    >
      Romance
    </h3>
    <h3
      className={activeKey === 7 && `active`}
      onClick={() => {
        setActiveKey(7);
        setSelectedOption(request.fetchMystery);
      }}
    >
      Mystery
    </h3>
    <h3
      className={activeKey === 8 && `active`}
      onClick={() => {
        setActiveKey(8);
        setSelectedOption(request.fetchSciFi);
      }}
    >
      Sci-fi
    </h3>
    <h3
      className={activeKey === 9 && `active`}
      onClick={() => {
        setActiveKey(9);
        setSelectedOption(request.fetchWestern);
      }}
    >
      Western
    </h3>
    <h3
      className={activeKey === 10 && `active`}
      onClick={() => {
        setActiveKey(10);
        setSelectedOption(request.fetchAnimation);
      }}
    >
      Animation
    </h3>
    <h3
      className={activeKey === 11 && `active`}
      onClick={() => {
        setActiveKey(11);
        setSelectedOption(request.fetchTV);
      }}
    >
      Movie
    </h3>
  </div>
  )
}

export default Navbar