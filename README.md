# React Immersive Code Challenge: Bot Battlr

Welcome to **Bot Battlr**, the one and only spot in the known universe where you can custom build your own Bot Army! This is our app:

## Instructions

For this project, you’ll be building out a React application that displays a list of available bots, among other features. Try your best to find the right places to insert code into the established code base.

Part of what this code challenge is testing is your ability to follow given instructions. While you will definitely have a significant amount of freedom in how you implement the features, be sure to carefully read the directions for setting up the application.

## Setup

After cloning down the project:

1. Run `npm install` in your terminal
2. Run `npm start`: This will open both your React page on port `3001` and your backend on port `3001`.

## Endpoints

The base URL for your backend is: `https://api.npoint.io/bee2812dc45155317e13/bots/`

These are the endpoints you might need:

- GET: `/bots`
- POST: `/bots`
- DELETE: `/bots/:id`

## What You Already Have

`BotCollection` is the highest component below App, and serves as the main container for all of the pieces of the page.

`BotCollection` and `MyBotArmy` are container components, which are siblings of `App`. `BotCollection` is where all the bots will be displayed, while `MyBotArmy` when i click on the `MyBotArmy` component that is when i will see the bots i have selected.

All of the code to style the page has been written in BotCollection.css.

## Core Deliverables

As a user, I should be able to:

- See profiles of all bots rendered in `BotCollection`.
- Add an individual bot to my army by clicking on it. The selected bot should render in the `MyBotArmy` component. The bot can be enlisted only **once**. The bot **does not** disappear from the `BotCollection`.
- Release a bot from my army by clicking on it. The bot disappears from the `MyBotArmy` component.
- Discharge a bot from their service forever, by clicking the red button marked "x", which would delete the bot both from the backend and from the `YourBotArmy` on the frontend.

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

> Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

As a user, I should be able to:

- Sort bots by their health, damage or armor. For this, create a new component, `SortBar`.
- When I enlist a bot it will be **removed** from the `BotCollection` and added to `YourBotArmy`.
- Filter bots by their class. We can select a few filters at the same time.
- Sort bots by their health, damage or armor. For this, create a new component, `SortBar`.
- Only enlist **one** bot from each `bot_class`. The classes are `["Support", "Medic", "Assault", "Defender", "Captain", "Witch"]`.

### Author 
Shuaib Shaban 

### License
ISC