import React, {useState, useEffect} from 'react'
import axios from './axios'
import "./Row.css"
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original"

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    // a snippet of code which runs based on a specific condition/variable
    useEffect(() => {
    //run a piece of code when the component Row loads
    //when the Row loads this snippet of code will run
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl]) //if there is any variable that is used inside the useEffect you must place that in the brackets -- must tell useEffect when using a variable outside the block
    //if [], run once when the row loads, and will not run again
    //if [movies], run once when the row loads, and will run again when movies changes
    
    //opts -- options
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {

            autoplay: 0
        }
    }

    const handleClick = (movie) => {
        if (trailerUrl) {  //if video was already open and you click the trailer
            setTrailerUrl(""); //this clears it and hides the video
        } else {
            movieTrailer(movie?.name || "")//movie trailer is module that will find a youtube trailer for it
            .then(url => {
                //https://www.youtube.com/watch?v=_VJgaDE7W-c
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get("v")) //because the v is the first character in the url we are searching for
            })
            .catch((error)=> console.log(error))
        }
    }

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="rowPosters">
            {/* sever rowPosters */}
            {/* ITS AN ARRAY SO MUST MAP THROUGH THE ARRAY TO GET ALL THE MOVIES */}
            {movies.map(movie => (
                <img
                key={movie.id}
                //create an onClick for your youTube videos
                onClick={() => handleClick(movie)} 
                // each movie his its own ID
                className={`rowPoster ${isLargeRow && "rowPosterLarge"}`} 
                // this code below changes the poster to an image
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name}
                /> //this is for the movie poster images
            ))}
            </div>
            {/* add youtube capabilities*/}
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
    

    


      
