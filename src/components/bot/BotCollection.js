import React, { useEffect, useState, memo } from "react";
import './BotCollection.css';

function BotCollection() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/63cd7ff9ace6f33a22c58a90")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.record.bots);
        setIsLoading(false);
      });
  }, []);
  const [selectedBots, setSelectedBots] = useState([]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
           <YourBotArmy selectedBots={selectedBots} setSelectedBots={setSelectedBots} />
      <div className="ac" style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((bot) => (
          <div style={{ width: "18rem", margin: "10px" }}>
            <div
              className="bot-card"
              onClick={() => {
                const existingBot = selectedBots.find((b) => b.name === bot.name);
                if (existingBot) {
                    setSelectedBots(selectedBots.filter((b) => b.name !== bot.name));
                } else {
                    setSelectedBots([...selectedBots, bot])
                }
              }}
            >
              <img src={bot.avatar_url} alt={bot.name} />
              <div className="card-body">
              <h2>🤖 {bot.name}</h2>
                <div>
                <p>Health ❤️‍🩹 : {bot.health}</p>
                <p>Damage ☣️: {bot.damage}</p>
                </div>
                <div style={{ display: "flex" }}>
                <p>Armor 🛡️: {bot.armor}</p>
                <p>{bot.bot_class}</p>
                </div>
                <p id="phrase">catchphrase : {bot.catchphrase}</p>
                <div style={{float: "right", marginTop: "45px"}}>
                <button className="btn">AddToMyArmy</button>
                </div>
                <div style={{float: "left",marginTop: "45px"}}>
                <button className="del btn btn-danger"> ❌ </button>
                </div>
             
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const YourBotArmy = memo(({ selectedBots, setSelectedBots }) => {
  return (
    <div className="yourBot">
      {selectedBots.map((selectedBot) => (
        <div className="select" onClick={() => setSelectedBots(selectedBots.filter(b => b.name !== selectedBot.name))}>
          <h3>Your Selected Bot</h3>
          <div className="ac" style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="bot-card">
              <img
                src={selectedBot.avatar_url}
                className="card-img-top"
                alt={selectedBot.name}
              />
              <h5 className="botName card-title">{selectedBot.name}</h5>
  <div>
  <p
  className="Health card-text"
  style={{ marginRight: "40px", fontSize: "25px" }}
  >
    ❤️‍🩹 Health: {selectedBot.health}{" "}
  </p>
  <p className="damage card-text">  Damage ☣️ {selectedBot.damage}</p>
  </div>
  <div>
  <p
  className="Armor card-text"
  style={{ marginRight: "40px" }}
  >
  Armor 🛡️ : {selectedBot.armor}
  </p>
  <p className="Class card-text">⚔️ : {selectedBot.bot_class}</p>
  </div>
  <p className="Catchphrase card-text">
  <h5> Catchphrase:</h5>
  <h6>{selectedBot.catchphrase}</h6>{" "}
  </p>
  <div>
  <button className="del btn btn-danger"> ❌ </button>
  </div>
  </div>
  </div>
  </div>
  ))}
  </div>
  
  );
  });
  
  export default BotCollection;