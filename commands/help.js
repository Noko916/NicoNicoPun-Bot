const Discord = require("discord.js");

const EmbedHelp = new Discord.MessageEmbed()
  .setTitle("コマンド一覧")
  .addField(".bank", "バンクへのリンク")
  .addField(".comyu", "各コミュリンク")
  .addField(
    ".dice [?]d[??]",
    "[?]d[??] のダイスを振ります\n個数: 20個まで　ダイス: 1000まで"
  )
  .addField(".help", "これを表示するコマンド")
  .addField(".pick [?? ?? ??]", "どれか１つを抽出します")
  .addField(".repeat [?????]", "[?????]と同じ発言をします")
  .addField(".sugoroku", "すごろくツアーズへのリンク")

  .setColor(1752220)

exports.run = (client, message, args) => {
  message.channel.send(EmbedHelp);
  return;
};
