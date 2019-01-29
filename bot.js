const Discord = require ('discord.js');
const client = new Discord.Client();

//MDX TEST

client.on('Ready', () => {
console.log("Created by MDX ... Logged in as ${client.user.tag}!");
 });
 

 
client.login(process.env.BOT_TOKEN);