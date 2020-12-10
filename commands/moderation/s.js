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
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
        message.delete({ timeout: 100 })

let tig = args.join(' ') || " ";

        const embed = new MessageEmbed()
            .setDescription(`Please do not use any language asides of ENGLISH is this server.We may not be able to assist you if you use different language, ${tig}`)
            .setColor(greenlight);

        message.channel.send(embed)
      } catch (e) {
          throw e;
      };
  }
};