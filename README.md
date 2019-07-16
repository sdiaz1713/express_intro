# express_intro

## Overview
- Express is a web framework that works in combination with Node.js (a web server) to make APIs!

# Installation
- Installing node
```
brew install node
```
- Installing express app generator globally
```
npm install -g express-generator
```
- Installing nodemon
```
npm install -g nodemon
```

# Goal
- Set up express app using express app generator
- Understand routers
- Make two get routes 
    - one will send all data in user-data.js
        - endpoint: /users
    - the second will send data for a user passed as a parameter
        - endpoint: /users/:name
    - the third will send back the favorite color of a user name passed as a parameter
        - endpoint: /colors/:name

