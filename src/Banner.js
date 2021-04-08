import React, {useState, useEffect} from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'

const Banner = () => {
    const [movie, setMovie] = useState([])
    // responsible for whatever random movie is at the top


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
                //randomly select 1 movie
            ]
            )
            return request

        }
        //runs based on a condition
        //run once when the banner component loads ([]) empty array
        fetchData();
    }, [])
    
    console.log(movie)

    function truncate(str, n) {
        return str?.length > n ? str.substr(0,n - 1)+ "..." : str
    }
    //if its longer than a given string length, return the truncated string with a ... ending

    return (

        <header className="banner"
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition: 'center center'
        }}
        > 
        

            {/* header needs a background image */}
            
            
        {/* <div className='newDiv'> */}
            {/* <div className='smaller'> */}

            <div className="contents">
              <h1 className='title'>
               {movie?.title || movie?.name || movie?.original_name}
              </h1>
                
                
                <h2 className='bannerDescription'>
                {truncate(movie?.overview, 150)}
                </h2>
            
           <div className='bannerButtons'>
                <button className="bannerButton1">▶︎ Play</button>
                <button className="bannerButton">ℹ︎ More Info</button>
            </div>
                
             
             
            </div>
            <div className="bannerFadeBottom"></div>
            </header>
            
            
    
    )
}

export default Banner
