const Discord = require("discord.js");

const EmbedSugoroku = new Discord.MessageEmbed()
  .setTitle("にこぷんのアトリエ")
  .setDescription(
    "ルール説明 : [[ **Documents** ](https://docs.google.com/document/d/1lXMIvFi7IxdYBtovydpRQteRk36LiJ9Bpjpva1am4yk/edit)]\n企画シート : [[ **SpreadSheets** ](https://docs.google.com/spreadsheets/d/1s2QfczDzd0bpGneXdl3wmcfbyfjDS4GbjTBKshSnwF8/edit#gid=0)]"
  )
  .setColor(1752220);

exports.run = (client, message, args) => {
  message.channel.send(EmbedSugoroku);
  return;
};
