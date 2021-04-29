const Discord = require("discord.js");

module.exports = {
  name: "repeat",
  description: "同じ言葉を繰り返します\n\`.repeat <***>\`",
  aliases: ["rep"],

  async execute(client, message, args) {
    var cont = message.content;
    var rep = cont.replace(".repeat ", "");

    message.channel.send(rep);
    return;
  },
};
