import React from 'react'
import VideoCard from './VideoCard'
import './css/Results.css'
import { useState,useEffect } from 'react'
import axios from '../axios'
import {Skeleton} from 'antd'


const Results = ({selectedOption,movieList,setMovieList}) => {

  const [moveis,setMovies] = useState()

  useEffect(() => {
      async function fetchData() {
        setMovies()
        const request = await axios.get(selectedOption)
        setMovies(request.data.results)
        return request
      }
      fetchData()
  }, [selectedOption])


  return (
    <div className='results'>

      { !moveis &&
        [...Array(20)].map((item,idx)=> <>
          <div key={idx}>
            <Skeleton.Input
            active
            style={{
              width: 240,
              height: 350,
              margin: "20px",
              borderRadius: "4%"
            }}
             />
          </div>
        </> )
      }

      {
        moveis?.map((data,idx) => 
        <VideoCard movieList={movieList} setMovieList={setMovieList} key={idx} data = {data} />
        )
      }
       
        
    </div>
  )
}

export default Results