const prefix = ">";
const Discord = require("discord.js");
const client = new Discord.Client;

 let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  
  if(cmd === `${prefix}ping`) {
  Client.commands.get('ping').execute(message, args);
  }
  
