const Discord = require("discord.js");

const EmbedLink = new Discord.MessageEmbed()
  .setTitle("リンク一覧")
  .addField(
    "コミュニティ",
    "　[ １号店 ](https://com.nicovideo.jp/community/co1354820)　[２号店](https://com.nicovideo.jp/community/co2645213)　[３号店](https://com.nicovideo.jp/community/co3540952)"
  )
  .addField("ポイント表","　[シート](https://docs.google.com/spreadsheets/d/1w0ZvpBs0P0e-l-0emYZsQYfRWbBKBtbwsWYAPEd6VyE/edit#gid=977767115)")
  .addField("シーズン企画「すごろくツアーズ」","[ルール](https://docs.google.com/document/d/1vwjvLG1LE1dX4StsFqh6tm0820-sDENHMj_-62-XHKc/edit?usp=sharing)　[フィールド](https://docs.google.com/spreadsheets/d/1XguQP5eG6tKRgjEsYSwZU-ndn-eoi0vYXsVZxBTe08Y/edit#usp=sharing)")
  .addField("ミステリーイベント：黒魔法発動中！","　[詳細](https://docs.google.com/document/d/1XKd5gn0wwrP5teSWy9UAQ2EP8efhU7kBp14hsC-nbDE/edit?usp=sharing)")

  .setColor(1752220);

exports.run = (client, message, args) => {
  message.channel.send(EmbedLink);
  return;
};