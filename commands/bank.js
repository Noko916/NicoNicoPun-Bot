const Discord = require("discord.js");

const EmbedBank = new Discord.MessageEmbed()
  .addField("ポイント表 :","[ **Here** ](https://docs.google.com/spreadsheets/d/1w0ZvpBs0P0e-l-0emYZsQYfRWbBKBtbwsWYAPEd6VyE/edit#gid=977767115)")
  .addField("シーズン企画「Survival Shooter」","[ルール](https://docs.google.com/document/d/1AYtP4O6dTp1NJsKqBVGuNmzHWTqveZzi_66Pl2TnQRY/edit?usp=sharing)　[関連シート]](https://docs.google.com/spreadsheets/d/1DsgZ3rb2b3XhdAjx7z9lavOoZZ3EFAQmKgXZG3VMGSU/edit?usp=sharing)")
  .setColor(1752220);

exports.run = (client, message, args) => {
  message.channel.send(EmbedBank);
  return;
};
