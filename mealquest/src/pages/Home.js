import React, {useState, useEffect} from "react";
import Nav from "../components/Nav";
import PIC from "../utils/PIC";
import "../homeBody.css";
import Dessert from "../components/Dessert";
import Drink from "../components/Drink";
import Breakfast from "../components/Breakfast";

function Home(){
    
  return(
    <div>
      <Nav/>
      <Dessert/>
      <Drink />
      <Breakfast />

    </div>
  );          
  
}

export default Home;