//.catch(console.error)
//setMaxListeners() to increase shithead
// Errors,warnings catchers (this should be fixed soon)
//bot.on("error", (e) => console.error(e));
//bot.on("warn", (e) => console.warn(e));
//bot.on("debug", (e) => console.info(e));
//.catch(console.error)


//this project shall be done by the end of July

const prefix = ">";
const Discord = require("discord.js");
const fs = require("fs");
const mysql = require("mysql")
const bot = new Discord.Client({disableEveryone: true});
const client = new Discord.Client 
require("./util/eventHandler")(bot)
let xp = require("./xp.json");
//let purple = botconfig.purple;
bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {   //FUCKING SUCCESSFULLY WORKING AFTER SHITTING UPN MY BALL!!!!!!

    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        console.log("Successfully loaded " + file)
        let commandName = file.split(".")[0];
        bot.commands.set(commandName, props);
    });
});


// bot.on("ready", async () => {
// console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
//   //bot.user.setActivity("", {type: "WATCHING"});
// //  bot.user.setGame(` ${bot.guilds.size} servers!`);
//
//
// });
/*var con = mysql.createConnection([
  host : "localhost",
  user : "root"
  password : "1234"
  database : "sadb"
]);
con.connect(err => {
if(err) thrwo err;
consle.log("connected to database");
con.query("SHOW TABLES",console.log);

})*/



bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
//   let xpAdd = Math.floor(Math.random() * 7) + 8;
//  console.log(xpAdd);
//
//  if(!xp[message.author.id]){
//    xp[message.author.id] = {
//      xp: 0,
//      level: 1
//    };
//  }
//
//
//  let curxp = xp[message.author.id].xp;
//  let curlvl = xp[message.author.id].level;
//  let nxtLvl = xp[message.author.id].level * 300;
//  xp[message.author.id].xp =  curxp + xpAdd;
//  if(nxtLvl <= xp[message.author.id].xp){
//    xp[message.author.id].level = curlvl + 1;
//    let lvlup = new Discord.RichEmbed()
//    .setTitle("Level Up!")
//    .setColor('#15f153')
//    .addField("New Level", curlvl + 1);
//
//    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
//  }
//  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
//    if(err) console.log(err)
// });
//
//
//
// some new XP setup
/*function generateXp() {
  let min = 20;
  let max = 30;
  return Math.floor(Math.random()*(max- min + 1)) + min;
}

con.query('SELECT * FROM xp WHERE id ='  `${message.author.id}`,(err, rows) => {
  if(err) throw err;
let sql;
  if(rows.length < 1){
    sql = 'INSERT INTO xp (id,xp) VALUES('${message.author.id}',${generateX()})'


  }else{
    let xp = rows[0].xp;
    sql = `UPDATE xp SET xp = ${xp + generateXp()} WHERE id ='${message.author.id}'`;
  }
  con.query(sql, console.log);
});
*/








  // let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);



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


  //
  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setTitle("About | Click to join support server")
    .setURL("https://discord.gg/BNVBfp") 
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Users",   ` ${bot.users.size} `)  // ` ${bot.users.size} ` //`${bot.guilds.size}`
    .addField("Bot Name", bot.user.username)
    .addField(`Bot Version`, `${client.version}`)
    .addField("Created By", "[Lozo#9405]")
    .addField("Created On",bot.user.createdAt);
    //.addField("For help",`>help`)
    
    /*.addField("Version", "1.0.0") the version thing should be fixed in the  nearfuture 
    .addField("Website","www.toxic.com"); 
    .setAuthor(Lozo,Lozo#9405,314886968540528640);
     bot.setImage(discordapp.com/channels/527516938461773834/558994585523716096/574578880925532161) */
    return message.channel.send(botembed);
  }
 /* if(cmd === `${prefix}help`){
let helpembed = new Discord.RichEmbed();
.setTitle("Bot Commands");
.setTitle("About | Click to join support server");
.setURL("https://discord.gg/BNVBfp") ;
.setColor("#15f153");
.addField("Modules",`>modules`);
.addField("Commands Details",`>help (name of the command)`);
.addField("Our Website",`https://lenoxbot.com/`);
message.channel.send(helpembed);

  } */
if(cmd === `${prefix}ping`) {
  Client.commands.get('ping').execute(message, args);
  }
  //message.reply("pong!!!")
//}
//Message.content group
if(message.content === `Hello`){
message.channel.send( `Bonjour,how are you?`)   //( `Bonjour ${message.author},how are you?`)

}
if (message.content === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
if(message.content === `${prefix}helpe`){
  let helpembed = new Discord.RichEmbed()
  .setDescription ("Bot's Commands")
  .setColor("#15f153")
  .addField("Commands", 'Serverinfo, Botinfo, Userinfo')

  message.channel.send(helpembed)
} if (message.content === `${prefix}helpe` && message.member.hasPermession("MANAGE_MESSAGES")){
  let modembed = new Discord.RichEmbed()
  .setDescription("Mods CMDS")
  .setColor("#15f153")
  .addField("CMDS", 'Kick, ban, tempmute')
  message.author.send(modembed)
}

  //Collection thing starts from here
//   if (collection.exists('message', 'Bob')) {
//  console.log('user here!');
// }
//console chatter   IDK whats happening with this feature
let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
  bot.channels.get("559870838229172247").send(x.join(" "));
//bot.channel.get(`name`, "general").send(x.join(" "));   //couldnt specify things
})//;
/*let biUser =  message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(message.content===`${prefix}baninfo` +  biUser  || message.member.hasPermession("MANAGE_MEMBERS")){
 message.channel.send(biUser.BanData); */

 /* let biembed = new Discord.RichEmbed();
//.setDescription('~Baninfo~')
.setColor("#bc0000")
.addField("Reason",bReason)
.addField("User", `${User} with ID ${User.id}`)

 let incidentchannel = message.guild.channels.find(`name`, "incidents");
  if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

  
  incidentchannel.send(biEmbed);


  return;
  */




/*if (message.content === `${prefix}send` ) {   //  if (message.content === `${prefix}send` ) {

 bot.channels.get("449646290540822529").sendMessage("Hello Monde")


} */ //feature if you wanna send a message to a specific channel
//var argresult = args.join('');
/*if (message.content === `${prefix}send` ) {   //  if (message.content === `${prefix}send` ) {

//  bot.channels.get("538296825036406784").sendMessage("Hello Monde")
message.reply("Hello Monsieur")
} */ //looking forward to make the help embed



//});
//bots control activity and status (should be fixed soon(shit head cmds honestly))
// var argresult = args.join('');
// if(message.content===`${prefix}setgame` ){
// if(!argresult) argresult === null;
// bot.user.setGame(argresult)
// }
// if (message.content === `${prefix}setstatus` ){
//   if(!argresult) argresult = 'online'
// bot.user.setstatus(argresult);
//
// }
//

});
bot.on("guildMemberAdd",async member => {
  console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
  member.guild.channels.get("welcome_bye").send(`"${member.user.username}" has joined this server`);
  member.guildMemberAdd.sendMessage("Welcome to "+ guild.Name )


});
bot.on("guildMemberRemove",async member => {
console.log(` User "${member.user.username}" just left "${member.guild.name}"` );
member.guild.channels.get("welcome_bye").send(`"${member.user.username}" left us👇`);


})
bot.on('guildDelete',guild => {
  console.log ( `I have left ${guild.name} at ${new Date()} ` ); //bugged CMD most likely
})
bot.on('guildCreate',guild =>{
  message.defaultChannel.send( `I have landed ${guild.name} ,Hello Monde de fellows` ); //bugged (an idiots guide tuto)
  console.log( `I have landed @ ${guild.name} server ` );
})

/*var servers = [];
function play (connection, message){
  var server = servers[message.guild.id]
  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter :"audioonly"}))
  server.queue.shift();
  server.dispatcher.on("end", function() {
    if(server.queue[0]) play(connection , message);
    else connection.disconnect()


  }      )
}




//Switch(args[0].toLowerCase()){
  //case "play":
// if(cmd === `play`){
 /*if(cmd === `${prefix}play`){
  /*if(!args[1]) {
    message.channel.sendMessage("Please provide a link");
    //return;
  } */
/*  if(!message.member.voicechannel){
    message.channel.sendMessage("You must join a Voice channel fellow!")
  }
  if(!servers[message.guild.id]) server [messge.guild.id] ={
    queue : []
  }
var servers = servers[message.guild.id]
server.queue.push(args[1]);

if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
  play(connection , message)
})
}   */


 //case "skip" :
  /*if(cmd === `${prefix}skip`){
  var server = servers [message.guild.id];
  if(server.dispatcher) server.dispatcher.end();
break;
} */
 //case "stop" :
 /* if(cmd === `${prefix}stop`){

 var server = servers [message.guild.id];
 if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();

}  */
//break;
//}
//
// for (message.content === "FUCK"
//   message.channel.send("FUCK me")
// )
// if(cmd === `${prefix}sendrules`){
// let RulesChannel = message.guild.channels.find("name", "Rules")
// RulesChannel.send({embed: {
//   color: 3447003,
//   description: "Rules are Rules!"
// // }
// // )};         //UNDER CONFIGURATION LOL SIR  THINGS ARE GONNA BE OKAY THO
//

// to be continued..........

//About song playing
const ytdl = require('ytdl-core');
/*client.once('ready', () => {
  console.log('Ready!');
});

client.once('reconnecting', () => {
  console.log('Reconnecting!');
});

client.once('disconnect', () => {
  console.log('Disconnect!');
});*/

bot.on('message', async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const serverQueue = queue.get(message.guild.id);

  if (message.content.startsWith(`${prefix}play`)) {
    execute(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}skip`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}stop`)) {
    stop(message, serverQueue);
    return;
  } else {
    message.channel.send('You need to enter a valid command!')
  }
});

async function execute(message, serverQueue) {
 // const args = message.content.split(' ');

  const voiceChannel = message.member.voiceChannel;
  if (!voiceChannel) return message.channel.send('You need to be in a voice channel to play music!');
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
    return message.channel.send('I need the permissions to join and speak in your voice channel!');
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
    title: songInfo.title,
    url: songInfo.video_url,
  };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true,
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    return message.channel.send(`${song.title} has been added to the queue!`);
  }

}

function skip(message, serverQueue) {
  if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
  if (!serverQueue) return message.channel.send('There is no song that I could skip!');
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) { //Constructors arent they??
  if (!message.member.voiceChannel) return message.channel.send('You have to be in a voice channel to stop the music!');
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
    .on('end', () => {
      console.log('Music ended!');
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on('error', error => {
      console.error(error);
    });
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}





bot.login('NTU2MjA1MTQ2NDY0NTgzNjkw.D22WMg.SwUtmlN02Z9dl5wj8rDhcCMLVjg');
