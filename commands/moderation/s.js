const { MessageEmbed } = require("discord.js");
const { greenlight } = require("../../JSON/colours.json")

module.exports = {
    config: {
        name: "s",
        category: "fun",
        noalias: [''],
        description: "Says your input via the bot",
        usage: "[text]",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
      try {
        if (!message.member.hasPermission('MANAGE_GUILD')) return;
        if (args.length === 0)
            return message.channel.send("Invaild !")
        message.delete({ timeout: 100 })

  const c = args.join(' ').split(' ') 

        const embed = new MessageEmbed()
            .setTitle(`Successfully Registered script No - `+ c[1])
            .setDescription(`Congratulations! <@`+ c[0] +`>.\nYou have successfully registered For WARRIOR ESPORTS PRESENTS PUBG MOBILE LITE T3 SCRIMS .`)
            .setColor(greenlight);

        message.channel.send(embed)
      } catch (e) {
          throw e;
      };
  }
};