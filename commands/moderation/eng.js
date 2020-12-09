const { MessageEmbed } = require("discord.js");
const { greenlight } = require("../../JSON/colours.json")

module.exports = {
    config: {
        name: "eng",
        category: "moderation",
        noalias: ['english'],
        description: "Says user to talk in english",
        usage: "[text]",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
      try {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
        message.delete({ timeout: 100 })

let tig = args.join(' ') || " ";

        message.channel.send(`Please do not use any language asides of ENGLISH is this server.We may not be able to assist you if you use different language, ${tig}`)
      } catch (e) {
          throw e;
      };
  }
};
