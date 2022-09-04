import React, { useEffect,useState } from "react";
import "./Banner.css";
import axios from "./includes/axios.js";
import Request from "./includes/request.js";

const url = "https://image.tmdb.org/t/p/original/";

export const Banner = () => {

   const [movie,setMovie]= useState([]);
    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(Request.fetchNetflixOrigiinal);

            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request; 
        }
        fetchData();
    },[])

  
    function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <>
      <div className="banner">
        <img src={`${url}${movie?.backdrop_path}`} alt="" />
        <div className="banner-container">
          <header className="banner-contents">
            <h1 className="banner_title">
                {movie?.title||movie?.name||movie?.original_name}
                </h1>
            <div className="banner_buttons">
              <button className="banner_button">play</button>
              <button className="banner_button">my list</button>
            </div>
            <h2 className="banner_description">
              {truncate(
               movie?.overview,150)}
            </h2>
          </header>
          <div className="banner--fadeBottom" />
        </div>
      </div>
    </>
  );
};
