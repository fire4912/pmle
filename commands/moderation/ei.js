const Discord = require("discord.js");
const MessageEmbed = require("discord.js");

module.exports = {
config: {
name: 'ei',
category: "moderation",
aliases: ['ei','emi'],
usage: "(Prefix)embed #channel-name | This is a Title | #ColorCode | This is a long Description",
accessableby: "Administrator",
description: 'Post a Embed'},
run: async (bot, message, args) => {


  if(message.member.hasPermission('ADMINISTRATOR')) return 

  const emb = new Discord.MessageEmbed()

.setColor('#FFF100')
.setImage('https://media.discordapp.net/attachments/740674896258007040/786288069249990656/AVbDU8wwiMqMAAAAAElFTkSuQmCC.png')
message.channel.send(emb);


  message.delete(); 
} 
}
