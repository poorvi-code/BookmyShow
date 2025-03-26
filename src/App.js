import React from "react";
import CustomNavbar from "./components/Navbar"; 
import CarouselComponent from "./components/CarouselComponent";

import MovieTrailer from "./components/MovieTrailer";

import Auth from "./components/Auth"; 
import DarkMode from "./components/DarkMode"; 
import Movies from "./components/Movies"; 




import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {
  return (
    <div>
      <CustomNavbar /> 
      <CarouselComponent />
      <MovieTrailer videoId="77vRyWNqZjM" />
      <DarkMode /> 
      <Movies />
      
      <Auth /> 
      
      <h1>Welcome to BookMyShow </h1>
      
    </div>
  );
}

export default App;
