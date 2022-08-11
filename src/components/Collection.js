import React from 'react'
import  './css/Collection.css';

const Collection = ({movieList,setMovieList}) => {
  return (
    <div>
        asd
        {movieList.map(item => (
            <div style={{color:"red"}}>
                <img src={item.poster} alt="" />
                <span>{item.poster}</span>
            </div>
        ))}
    </div>
  )
}

export default Collection