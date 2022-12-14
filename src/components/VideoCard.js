import {MdPoll} from 'react-icons/md';
import {FaImdb,FaPlayCircle} from 'react-icons/fa';
import './css/VideoCard.css';
import ReactBoxFlip from 'react-box-flip';
import { useState,useEffect } from 'react';
import PreviewModal from '../utils/PreviewModal';
import { truncate } from '../utils/truncate';
import movieTrailer from 'movie-trailer'; 
import {MdAddCircle} from 'react-icons/md';




export const base_url = "https://image.tmdb.org/t/p/original";

const VideoCard = ({data,movieList,setMovieList,onProfil}) => {

  const [flipped, setFlipped] = useState(false)
  const [visible,setVisible] = useState(false)
  const [url,setUrl] = useState("")
  const [on,setOn] = useState(false)
  const [err,setErr] =useState(false)
  
  

   
  useEffect(()=> {
    movieTrailer(data?.original_title || data?.title, 18 )
    .then((res) => {
      setUrl(res)
    }).catch((err) => {
    })
  }, [data?.original_title, data?.title])




  function addBasket(){
    const addFind = movieList.find(item => item.id === data.id);
    if(addFind)
    {
      setMovieList([...movieList.filter(item => item.id !== data.id),{
        id : data.id,
        title: data.title,
        original_title: data.original_title,
        release_date: data.release_date,
        poster: data.poster_path,
        amount : addFind.amount
      }])

    }
    else 
    {
      setMovieList([...movieList,{
        id : data.id,
        title: data.title,
        original_title: data.original_title,
        release_date: data.release_date,
        poster: data.poster_path,
        amount : 1
      }])
    }
    console.log(movieList)
  }


  const notify = () => {
      alert("giriş yapmadan favorilere ekleyemezsiniz")
  }

  
 
  


  
 if (flipped) {

  return(
    // back side
    <div>
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
                Watch Now
            </strong>

          </span>
        </div>
            <PreviewModal visible={visible} setVisible={setVisible}/>
    </div>

  )


 }
  return (<div>


        {/* // fornt side */}
       
        <div style={{
          width: 250,
          height: 460,
          cursor: "pointer"
        }} className='videoCard'>

<button  onClick={onProfil === true ? addBasket : notify} class="add"> 
        <MdAddCircle color='white'/>
</button>

          <img onClick={() => setFlipped(!flipped)} src={`${base_url}${data?.poster_path}`} alt="poster" />
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
  </div>
    
  )
}

export default VideoCard