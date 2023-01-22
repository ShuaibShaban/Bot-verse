import React, { useState, useEffect } from 'react';

function selectedBot() {
    const [selectedBot, setSelectedBot] = useState(null);
  
    return (
      <div className="app">
        <BotCollection onSelect={setSelectedBot} />
        <MyBotArmy selectedBot={selectedBot} />
      </div>
    );
  }

  export default selectedBot;