import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,IMG_URL} from '../../constants/constants'
function Banner() {

	const [movie,setMovie] = useState()
  useEffect(()=> {
	axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=> {
		const movieId = Math.trunc(Math.random()*20) + 1;
		setMovie(response.data.results[movieId])
		
	}).catch((e)=> console.log(e))
  },[])

  return (
    <div
	style={{backgroundImage:`url(${movie ? IMG_URL+movie.backdrop_path : ""})`}}
	className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ''}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
             <h1 className='descr'>
				{movie ? movie.overview : ''}
             </h1>
        </div> 
        <div className="fade"></div>
    </div>
  )
}

export default Banner
