const Discord = require("discord.js");
const MessageEmbed = require("discord.js");

module.exports = {
config: {
name: 'Embed',
category: "moderation",
aliases: ['em','embed'],
usage: "(Prefix)embed #channel-name | This is a Title | #ColorCode | This is a long Description",
accessableby: "Administrator",
description: 'Post a Embed'},
run: async (bot, message, args) => {


  if(!message.member.hasPermission('ADMINISTRATOR')) return;

let EmbedChannel = message.mentions.channels.first();


  const cmd = args.join(' ').split(' | ') 

  let emb = new Discord.MessageEmbed()
  .setColor(cmd[1])
  .setDescription(cmd[2])
.setTitle(cmd[3]);
if (!EmbedChannel) { 
let prefix = ('.')
return message.channel.send(`**How to use Embed?** \n`+ prefix +`embed [#channel name] | Title | Color Code | Description.`);}
if (EmbedChannel) {
return EmbedChannel.send (emb);} 


  message.delete(); 
} 
}