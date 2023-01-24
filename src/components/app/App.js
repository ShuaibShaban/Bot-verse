import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import BotCollection from "../bot/BotCollection";
import MyBotArmy from "../mybotarmy/MyBotArmy";
import Navbar from "../navbar/NavBar";





;
function App() {
  return (
    <div className="App">
    
    <BotCollection />
    <MyBotArmy />
    <Navbar />
   
   
    </div>
  );
}

export default App;