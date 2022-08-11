import {MdPoll} from 'react-icons/md';
import {FaImdb,FaPlayCircle} from 'react-icons/fa';
import './css/VideoCard.css';
import ReactBoxFlip from 'react-box-flip';
import { useState,useEffect } from 'react';
import PreviewModal from '../utils/PreviewModal';
import { truncate } from '../utils/truncate';
import movieTrailer from 'movie-trailer'; 

export const base_url = "https://image.tmdb.org/t/p/original";

const VideoCard = ({data,movieList,setMovieList}) => {

  const [flipped, setFlipped] = useState(false)
  const [visible,setVisible] = useState(false)
  const [url,setUrl] = useState("")
  const [on,setOn] = useState(false)


   
  useEffect(()=> {
    movieTrailer(data?.original_title || data?.title, 18 )
    .then((res) => {
      setUrl(res)
    }).catch((err) => {
      console.log("temporarily unavailable")
    })
  }, [data?.original_title, data?.title])

  const basketProduct = movieList.find(item => item.id === data.id);

  function addBasket(){
    
    const addFind = movieList.find(item => item.id === data.id);
    if(addFind)
    {
      addFind.amount += 1;
      setMovieList([...movieList.filter(item => item.id !== data.id),{
        id : data.id,
        name: data.title,
        release_date: data.release_date,
        poster: data.poster_path,
        amount : addFind.amount
      }])

    }
    else 
    {
      setMovieList([...movieList,{
        id : data.id,
        name: data.title,
        release_date: data.release_date,
        poster: data.poster_path,
        amount : 1
      }])
    }
    console.log(movieList)
  }





  
 if (flipped) {

  return(
    <>
       <div style={{
      width: 250,
      height: 435,
      cursor: 'pointer' 
    }} onClick={() => setFlipped(!flipped)} className='videoCard'>
          <h2 style={{color: "#fff"}}>{truncate(data?.original_title || data?.title, 18 )}</h2>
          <p>{truncate(data?.overview, 150)}</p>
          <span style={{
            display: "flex",
            alignItems: "center"
          }}><MdPoll size={"30px"} style={{
            marginRight: "10px" 
          }}/>{data?.vote_count} | {data?.release_date} </span>
          <span style={{
            display: "flex",
            alignItems: "center",
            margin: "5px 0px",
            flex:1
          }}>
            <FaImdb size={"30px"} style={{
            marginRight: "10px" 
          }}/>
          {data?.vote_average}
          </span>
          <span onClick={()=> setVisible(true)} style={{
            display: "flex",
            alignItems: "center",
            margin: "50px 0px",
            flex:1
          }}>
            <FaPlayCircle color='#16DA8E' size={"50px"} style={{
            marginRight: "10px" 
          }}/>
            <strong style={{
              fontSize:"28px",
              fontWeight: 400,
              margin: "0px 5px" 
            }}> 
                watch Now
            </strong>

          </span>
        </div>
            <PreviewModal visible={visible} setVisible={setVisible}/>
    </>

  )


 }
  return (<>

        
        {/* // fornt side */}
        <button onClick={addBasket} >+</button>
        <div style={{
          width: 250,
          height: 435,
          cursor: "pointer"
        }}onClick={() => setFlipped(!flipped)} className='videoCard'>
          <img src={`${base_url}${data?.poster_path}`} alt="poster" />
          <h3 style={{
            color: "#fff",
            margin: "10px 10px"
          }}>{truncate(data?.original_title || data?.title, 18 )}</h3>
        </div>
        <PreviewModal
         visible={visible}
         setVisible={setVisible}
         data = {data}
         url = {url}
         />
  </>
    
  )
}

export default VideoCard