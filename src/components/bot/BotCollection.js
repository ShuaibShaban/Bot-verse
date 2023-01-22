import React, { useState, useEffect } from 'react';
import './BotCollection.css';
import MyBotArmy from '../mybotarmy/MyBotArmy';


function BotCollection() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('https://api.npoint.io/bee2812dc45155317e13/bots/')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  function handleClick(bot) {
    setArmy([...army, bot]);
  }

  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <div className="bot-card" onClick={() => handleClick(bot)}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h2>{bot.name}</h2>
          <p>{bot.description}</p>
          <p>catchPhrase: {bot.catchPhrase}</p>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
