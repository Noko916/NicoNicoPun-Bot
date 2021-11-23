const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

const Embed = new MessageEmbed()
  .setTitle("コミュ一覧")
  .addField(
    "にこにこぷん",
    "[一号店](https://com.nicovideo.jp/community/co1354820)　[二号店](https://com.nicovideo.jp/community/co2645213)　[三号店](https://com.nicovideo.jp/community/co3540952)"
  )
  .setColor(1752220);

//トーナメント開催時OPEN
//.addField("ニコ生カジノトーナメント","[総合運営本部](https://com.nicovideo.jp/community/co4145215)")

module.exports = {
  name: "comyu",
  description: "コミュ一覧を表示します",
  aliases: ["com", "commu", "komyu"],

  async execute(client, message, args) {

    message.channel.send({ embeds: [Embed] });
    return;
  },
};
