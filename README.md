# Git-Bot

A discord bot built around [discord.js](https://discord.js.org/) to make interactive bot for getting help with git.

## Requirement
* nodejs
* npm

## Installation
1. Go to [Discord Developer Portal](https://discord.com/developers/applications). 
    - Create an application with your desired name
    - Under the bot section add a bot
    - Get the Bot access token. (copy it and save it safely)
    > Do not share your token with anyone. Specially if the bot has admin level authorization it can remove everyone in the included servers. Spam stuffs and what not.
    - Under O-Auth2 section select bot and give it reasonable access in the new sub sections. 
    > For the git-bot I didn't really bother about permission and it is admin of our server.
2. Create a new file named `.env` as a copy of `.env.example` and paste the access token in respective field. `bot_token`. 
> like so: **bot_token=somesecretmustremainso**
3. Add a prefix of your choice. as `bot_prefix` variable. Prefix is basically the first character to let bot know it is a message for it.
> like so: **bot_prefix=!**
4. Now run.
    - for development run: `npm run dev`
    - for production: `npm start`

## Deploy

### Heroku
1. Create new heroku app: `heroku create my-git-bot`
2. Push codes to heroku. 
> Make sure your .gitignore file does not include .env file when pushing. See our .gitignore for instruction.
3. Go to heroku portal and under the settings -> Config Vars. (reveal them first) add two new variables. the ones in the .env file. So your code can fetch them from here. 
4. You should be all good to go. 

## Usage

## Issue Template


## Code of Conduct


## Pull Request Template