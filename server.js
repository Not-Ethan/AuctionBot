const Discord = require('discord.js');
const api = require("@zikeji/hypixel");
const apiClient = new api.Client(process.env.KEY);

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === 'ping') {
     message.reply('Pong!');
  }
});

client.login(process.env.TOKEN);