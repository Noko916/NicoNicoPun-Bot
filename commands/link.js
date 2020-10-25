const Discord = require("discord.js");

const EmbedLink = new Discord.MessageEmbed()
  .setTitle("リンク一覧")
  .addField(
    "コミュニティ",
    "　[ １号店 ](https://com.nicovideo.jp/community/co1354820)　[２号店](https://com.nicovideo.jp/community/co2645213)　[３号店](https://com.nicovideo.jp/community/co3540952)"
  )
  .addField("ポイント表","　[シート](https://docs.google.com/spreadsheets/d/1w0ZvpBs0P0e-l-0emYZsQYfRWbBKBtbwsWYAPEd6VyE/edit#gid=977767115)")
  .addField("シーズン企画「Survival Shooter」","[ルール](https://docs.google.com/document/d/1AYtP4O6dTp1NJsKqBVGuNmzHWTqveZzi_66Pl2TnQRY/edit?usp=sharing)　[関連シート]](https://docs.google.com/spreadsheets/d/1DsgZ3rb2b3XhdAjx7z9lavOoZZ3EFAQmKgXZG3VMGSU/edit?usp=sharing)")

  .setColor(1752220);

exports.run = (client, message, args) => {
  message.channel.send(EmbedLink);
  return;
};