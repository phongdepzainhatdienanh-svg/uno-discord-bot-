require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const config = require('./config');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log(`✅ Bot mới đã online: ${client.user.tag}`);
});

client.login(config.token);

// Web server giữ bot chạy 24/7 trên Render
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Uno Game Bot đang chạy 24/7!');
});

app.listen(PORT, () => {
  console.log(`Web server đang chạy trên cổng ${PORT}`);
});