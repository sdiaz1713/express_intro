# Express Intro

## Overview
- Express is a web framework that works in combination with Node.js (a web server) to make APIs!

## Installation
- Installing node. 
- Note: you may need to install brew
```
brew install node
```
- Installing express app generator globally. [View Docs Here](https://expressjs.com/en/starter/generator.html)
```
npm install -g express-generator
```
- Installing nodemon. [View Docs Here](https://www.npmjs.com/package/nodemon)
```
npm install -g nodemon
```

## Goal
- Set up express app using express app generator
- Understand routers
- Make two get routes 
    - one will send all data in user-data.js
        - endpoint: /users
    - the second will send data for a user passed as a parameter
        - endpoint: /users/:name
    - the third will send back the favorite color of a user name passed as a parameter
        - endpoint: /colors/:name

