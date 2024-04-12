/**
█▀▀ █ █▀█ █▀▀ █▄▄ █▀█ ▀█▀
█▀░ █ █▀▄ ██▄ █▄█ █▄█ ░█░  

 * **********************************************
 *   Code by FIREBOT
 * **********************************************
 */



const { Client, GatewayIntentBits, ActivityType, TextChannel } = require('discord.rz');
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const client = new Client({
  intents: Object.keys(GatewayIntentBits).map((a) => {
    return GatewayIntentBits[a];
  }),
});
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('YaY Your Bot Status Changed✨');
});
app.listen(port, () => {
  console.log(`🔗 Listening to RED ZOBE: http://localhost:${port}`);
  console.log(`🔗 Powered By RZ`);
});


const statusMessages = ["Playing to Server Setup","RED - ZONE"];


let currentIndex = 0;
const channelId = '';

async function login() {
  try {
    await client.login();
    console.log(`\x1b[36m%s\x1b[0m`, `|    🐇 Logged in as ${client.user.tag}`);
  } catch (error) {
    console.error();
    process.exit(1);
  }
}

/**
█▀▀ █ █▀█ █▀▀ █▄▄ █▀█ ▀█▀
█▀░ █ █▀▄ ██▄ █▄█ █▄█ ░█░ 

 * **********************************************
 *   Code by FIREBOT
 * **********************************************
 */


function updateStatusAndSendMessages() {
  const currentStatus = statusMessages[currentIndex];
  const nextStatus = statusMessages[(currentIndex + 1) % statusMessages.length];

  client.user.setPresence({
    activities: [{ name: currentStatus, type: ActivityType.Custom}],
    status: 'dnd',
  });

  
  const textChannel = client.channels.cache.get(channelId);

  if (textChannel instanceof TextChannel) {
   
    textChannel.send(`Bot status is: ${currentStatus}`);
  } else {

  }

  currentIndex = (currentIndex + 1) % statusMessages.length;
}

client.once('ready', () => {
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Bot is ready as ${client.user.tag}`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✨HELLO RED ZONE FAMILY 💞`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ❤️WELCOME TO THE SERVER 🥰`);
  updateStatusAndSendMessages();

  setInterval(() => {
    updateStatusAndSendMessages();
  }, 10000);
});

login(1203685608216854538);

/**
█▀▀ █ █▀█ █▀▀ █▄▄ █▀█ ▀█▀
█▀░ █ █▀▄ ██▄ █▄█ █▄█ ░█░   

 * **********************************************
 *   Code by FIREBOT
 * **********************************************
 */
