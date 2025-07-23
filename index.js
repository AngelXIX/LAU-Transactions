const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();
const http = require('http');

// Create a new Discord client
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Your bot token from .env
const TOKEN = process.env.DISCORD_TOKEN;

// When the bot is ready
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Login the bot
client.login(TOKEN);

// Minimal HTTP server to keep App Platform happy
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Bot is running');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
