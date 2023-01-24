import React, { useState, useEffect } from 'react';

function MyBotArmy({ selectedBot }) {
  const [army, setArmy] = useState([]);

  useEffect(() => {
    if (selectedBot && !army.find(bot => bot.id === selectedBot.id)) {
      setArmy([...army, selectedBot]);
      fetch('https://api.example.com/bot/enlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bot: selectedBot })
      });
    }
  }, [selectedBot]);

  function handleClick(bot) {
    const newArmy = army.filter(b => b.id !== bot.id);
    setArmy(newArmy);
    fetch(`https://api.example.com/bot/remove/${bot.id}`, {
      method: 'DELETE'
    });
  }

  return (
    <div className="my-bot-army">
      <h1>My Bot Army</h1>
      {army.map(bot => (
        <div className="bot-card" key={bot.id} onClick={() => handleClick(bot)}>
          <h2>{bot.name}</h2>
          <p>{bot.description}</p>
        </div>
      ))}
    </div>
  );
}

export default MyBotArmy;
