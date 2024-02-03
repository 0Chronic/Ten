import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";


function App() {
  return (
    <div >
      <Navbar></Navbar>
     <Hero></Hero>
     <Offers></Offers>
     <Plan></Plan>
     <Rooms></Rooms>
     <ImageSlider></ImageSlider>
   <Footer></Footer>
     
    </div>
  );
}

export default App;
