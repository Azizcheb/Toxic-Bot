const prefix = ">";
const Discord = require("discord.js");
const client = new Discord.Client;

 let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  
  if(cmd === `${prefix}ping`) {
  Client.commands.get('ping').execute(message, args);
  }

if(cmd === `${prefix}serverinfo`){

    //let sicon = guild.displayAvatarURL;
    let serverembed = new Discord.RichEmbed()

    .setDescription("Server Information")
    .setColor("#15f153")
    //.setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField(`Owner`, `${message.guild.owner.user.tag}`, true)
    .addField(`Members`, `${message.guild.members.size} (${message.guild.presences.filter(p => p.status === 'online').size} online, ${message.guild.presences.filter(p => p.status === 'idle').size} idle, ${message.guild.presences.filter(p => p.status === 'dnd').size} dnd, ${message.guild.presences.filter(p => p.status === 'dnd').size} invisible/offline)`, true)
    .addField("You Joined", message.member.joinedAt)
    //.addField("Total Members", message.guild.memberCount);
    .addField(`Features`, `${message.guild.features.join(', ') || 'None'}`, true)
    .addField(`Roles`, `${message.guild.roles.filter(r => r.position !== 0).map(R => R.name).join(', ')}`, true) // Filter is to filter out @everyone role


    return message.channel.send(serverembed);
  }



  


bot.login('NTU2MjA1MTQ2NDY0NTgzNjkw.D22WMg.SwUtmlN02Z9dl5wj8rDhcCMLVjg');
