const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

const Embed = new MessageEmbed()
  .addField("ポイント表 :", "[ **Here** ](https://docs.google.com/spreadsheets/d/1w0ZvpBs0P0e-l-0emYZsQYfRWbBKBtbwsWYAPEd6VyE/edit#gid=977767115)")
  .setColor(1752220);

module.exports = {
  name: "bank",
  description: "ポイント表のリンクを表示します",

  async execute(client, message, args) {
    message.channel.send({ embeds: [Embed] });
  }
}