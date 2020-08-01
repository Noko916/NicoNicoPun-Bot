const Discord = require("discord.js");

const EmbedSugoroku = new Discord.MessageEmbed()
  .setTitle("すごろくツアーズ")
  .setDescription(
    "ルール説明 : [[ **Documents** ](https://docs.google.com/document/d/1vwjvLG1LE1dX4StsFqh6tm0820-sDENHMj_-62-XHKc/edit?usp=sharing)]\n盤面 : [[ **SpreadSheets** ](https://docs.google.com/spreadsheets/d/1XguQP5eG6tKRgjEsYSwZU-ndn-eoi0vYXsVZxBTe08Y/edit#usp=sharing)]"
  )
  .setColor(1752220);

exports.run = (client, message, args) => {
  message.channel.send(EmbedSugoroku);
  return;
};
