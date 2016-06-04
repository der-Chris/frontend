# Installation

## Requirements

- node and npm installed
- Mongodb installed locally

## Steps

Clone and change into the repostory

    git clone https://github.com/Pfarrer/help-me-choose.git
    cd help-me-choose`
  
Install dependencies

    npm install

Install Typescript typings

    ./node_modules/.bin/typings install

Build application

    ./node_modules/.bin/gulp

Run the server

    node build/server/server.js

Open a browser and navigate to http://localhost:8000
