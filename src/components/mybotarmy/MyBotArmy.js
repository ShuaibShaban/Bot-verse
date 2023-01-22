import React, { useState, useEffect } from 'react';

function MyBotArmy({ selectedBot }) {
  const [army, setArmy] = useState([]);

  useEffect(() => {
    if (selectedBot && !army.find(bot => bot.id === selectedBot.id)) {
      setArmy([...army, selectedBot]);
    }
  }, [selectedBot]);

  function handleClick(bot) {
    const newArmy = army.filter(b => b.id !== bot.id);
    setArmy(newArmy);
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
