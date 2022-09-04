import React from "react";
import Nav from "./Nav.js";
import { Banner }from "./Banner.js";
import "./HomeScreen.css";
import { Row } from "./Row.js";
import request from "./includes/request.js";

export const HomeScreen = () => {
  return (
    <>
      <div className="homeScreen">
           <Nav />
           <Banner />
           <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOrigiinal} isLargeRow={true} />  
      <Row title="Trending Now" fetchUrl={request.fetchTrending} /> 
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} /> 
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} /> 
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} /> 
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/> 
      </div>
    </>
  );
};
