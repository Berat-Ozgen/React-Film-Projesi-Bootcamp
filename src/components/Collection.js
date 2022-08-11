import React from 'react'
import { truncate } from '../utils/truncate';
import  './css/Collection.css';
import Header from './Header';
import {MdPoll} from 'react-icons/md';
import {FaImdb,FaPlayCircle} from 'react-icons/fa';
import { useState } from 'react';
import {AiFillDelete} from 'react-icons/ai';
import PreviewModal from '../utils/PreviewModal';

export const base_url = "https://image.tmdb.org/t/p/original";


const Collection = ({movieList,setMovieList,setCollection}) => {
     const [active,setActive] = useState(true)
     const [vis,setVis] = useState(false)
     const [urrl,setUrl] = useState("")


   
     const onClickDelet =()=> {
      setMovieList(...movieList.filter(item => item.id !== movieList.id))
     }
  


     return (
      <div className='Collection-component'>

      <div onClick={() => setCollection(false)} className='back-span'>HOME</div>
      <div className='film-list'>
      {movieList?.map((item,i) => (
     <div key={i} className='card'>
      <button onClick={onClickDelet} ><AiFillDelete/></button>
        <div className='film-card'>
          <div className='card-img'>
           <img src={`${base_url}${item.poster}`} alt="hata" /> 
          </div>
          <div className='card-name'>{item.title}</div> 

        </div>
      </div>
     
      ))}
      </div>
       


      


      </div>
     )

    
}

export default Collection