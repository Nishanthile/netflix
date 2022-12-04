import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from "./Axio";
import "./Row.css";

const Row = ({ title, fetchUrl, isLarge = false }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const base_Url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    console.log(movies);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || " ")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                   setTrailerUrl(urlParams.get("v"));
                    
                }).catch((error) => { console.log(error) })
        }
    }

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row__posters'>

                {
                    movies.map((movie) =>

                        ((isLarge && movie.poster_path ) ||
                            (!isLarge && movie.backdrop_path )  ) && (

                               <div className={`row_poster ${isLarge && "row_posterLarge"}`}> 
                            <img   

                                key={movie.id}
                                onClick={() => handleClick(movie)}
                                src={`${base_Url}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name}
                               
                            /> 
                          <div className='main'> { isLarge ? movie.name :movie.title}</div>
                          </div>

                        )


                    )
                }
             
                <div className='movie_name'></div>


            </div>

            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}



        </div>
    )
}

export default Row
