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


const Collection = ({moveis,setMovies,movieList,setMovieList,setCollection}) => {
     

   
  function onClickDelet(){
    const removeFind = movieList.find(item => item.id === moveis.id);
    console.log(removeFind === true)

    if(!removeFind)
    {
      setMovieList([...movieList.filter(item => item.id !== moveis.id)]);
    }
    else
    {
      setMovieList([...movieList.filter(item => item.id !== moveis.id),
      {
        id : movieList.id,
        title: movieList.title,
        original_title: movieList.original_title,
        release_date: movieList.release_date,
        poster: movieList.poster_path,
        amount : removeFind.amount
      }])
    }
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