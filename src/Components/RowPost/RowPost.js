import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios  from '../../axios'
import {  API_KEY, IMG_URL } from '../../constants/constants'

import YouTube from 'react-youtube';


function RowPost(props) {

  const [urlId,setUrlId] = useState('')
  const [movies,setMovies] = useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=> {
      setMovies(response.data.results)
    }).catch((e)=> console.log(e))
  },[])



  const opts = {
    height: '720',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovieTrailer = (id)=> {
    axios.get(`movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then((response)=> {
      if(response.data.results.length !== 0) {
        setUrlId(response.data.results[0].key)
      }
      
    }).catch((e)=> console.log(e))
  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {movies.map((item)=> 
              <img 
              key={item.id} 
              onClick={()=> handleMovieTrailer(item.id)}
              src={`${IMG_URL+item.backdrop_path}`} alt="" className={props.isSmall ? 'smallPoster' : 'poster'} />
            )}
       </div> 
{urlId && <YouTube videoId={urlId} opts={opts} />}
    </div>
  )
}

export default RowPost
