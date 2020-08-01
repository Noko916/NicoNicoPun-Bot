const Discord = require("discord.js");

exports.run = (client, message, args) => {
  var cont = message.content;
  var rep = cont.replace(".repeat ", "");

  message.channel.send(rep);
  return;
};
