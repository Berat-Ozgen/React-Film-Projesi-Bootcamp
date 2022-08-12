import React from 'react'
import { truncate } from '../utils/truncate';
import  './css/Collection.css';
import Header from './Header';
import {MdPoll} from 'react-icons/md';
import {FaImdb,FaPlayCircle} from 'react-icons/fa';
import { useState } from 'react';
import {TiDeleteOutline} from 'react-icons/ti';
import PreviewModal from '../utils/PreviewModal';

export const base_url = "https://image.tmdb.org/t/p/original";


const Collection = ({moveis,setMovies,movieList,setMovieList,setCollection}) => {
     

   
  function onClickDelet(id){

    
      setMovieList([...movieList.filter(item => item.id !== id)]);
   

    
  }
  console.log(movieList)


     return (
      <div className='Collection-component'>

        <h1 style={{color:"#e73c7e"}}>Collection</h1>

      <div onClick={() => setCollection(false)} className='back-span'>HOME</div>
      <div className='film-list'>
      {movieList?.map((item,i) => (
     <div key={i} className='card'>
      <div className='delete' onClick={()=>onClickDelet(item.id)} ><TiDeleteOutline/></div>
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