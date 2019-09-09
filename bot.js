
const Discord = require("discord.js");



// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

  


bot.login('NTU2MjA1MTQ2NDY0NTgzNjkw.D22WMg.SwUtmlN02Z9dl5wj8rDhcCMLVjg');
