import React, { useState, useEffect } from 'react';
import './BotCollection.css';
import MyBotArmy from '../mybotarmy/MyBotArmy';


function BotCollection() {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch('https://api.npoint.io/bee2812dc45155317e13/bots/')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  function handleClick(bot) {
    setSelectedBot(bot);
  }

  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <div className={`bot-card ${bot === selectedBot ? 'selected' : ''}`} onClick={() => handleClick(bot)}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h2>🤖 {bot.name}</h2>
          <p>Health ❤️‍🩹 : {bot.health}</p>
          <p>Damage ☣️: {bot.damage}</p>
          <p>Armor 🛡️: {bot.armor}</p>
          <p>{bot.description}</p>
          <p>{bot.bot_class}</p>
          <p id="phrase">catchphrase : {bot.catchphrase}</p>
          <button className="btn">AddToMyArmy</button>
          {/* <button className="bt">Remove</button> */}
        </div>
      ))}
      <MyBotArmy selectedBot={selectedBot} />
    </div>
  );
}

export default BotCollection;

