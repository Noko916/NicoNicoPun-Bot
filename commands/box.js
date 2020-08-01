const Discord = require("discord.js");

const EmbedBoxB = new Discord.MessageEmbed()
  .setTitle("箱開け報酬 ブロンズ")
  .addFields({
    name: "Bronze",
    value:
      "Deal:　5P\n ========== \n　２:　-\n　３:　-\n　４:　-\n　５:　-\n　６:　-\n　７:　5P\n　８:　10P\n　９:　15P\n　10:　20P\n　Ｊ:　25P\n　Ｑ:　30P\n　Ｋ:　抽選数字+2\n　Ａ:　青着席権(Lv.15)",
    inline: false
  })
  .setColor(1752220);

const EmbedBoxS = new Discord.MessageEmbed()
  .setTitle("箱開け報酬　シルバー")
  .addFields({
    name: "Silver",
    value:
      "Deal:　20P\n ========== \n　２:　5P\n　３:　5P\n　４:　5P\n　５:　10P\n　６:　10P\n　７:　15P\n　８:　30P\n　９:　50P\n　10:　100P\n　Ｊ:　抽選数字＋２\n　Ｑ:　青着席権（Lv.15）\n　Ｋ:　青着席権（Lv.20）\n　Ａ:　青着席権（Lv.∞）",
    inline: false
  })
  .setColor(1752220);

const EmbedBoxG = new Discord.MessageEmbed()
  .setTitle("箱開け報酬　ゴールド")
  .addFields({
    name: "Gold",
    value:
      "Deal:　100P\n ========== \n　２:　30P\n　３:　30P\n　４:　30P\n　５:　50P\n　６:　100P\n　７:　200P\n　８:　300P\n　９:　青着席権（Lv.20）\n　10:　青着席権（Lv.∞）\n　Ｊ:　青着席権（Lv.∞）＋50P\n　Ｑ:　赤着席権\n　Ｋ:　赤着席権＋50P\n　Ａ:　VIP着席権×1 or 10PP",
    inline: false
  })
  .setColor(1752220);

const EmbedBoxGp = new Discord.MessageEmbed()
  .setTitle("箱開け報酬　ゴールド +")
  .addFields({
    name: "Gold+",
    value:
      "Deal:　200P\n ========== \n　２:　30P\n　３:　30P\n　４:　50P\n　５:　100P\n　６:　200P\n　７:　300P\n　８:　青着席権（Lv.20）\n　９:　青着席権（Lv.∞）\n　10:　青着席権（Lv.∞）＋50P\n　Ｊ:　赤着席権\n　Ｑ:　赤着席権＋50P\n　Ｋ:　VIP着席権×1 or 10PP\n　Ａ:　VIP着席権×2 or 20PP",
    inline: false
  })
  .setColor(1752220);

const EmbedBoxP = new Discord.MessageEmbed()
  .setTitle("箱開け報酬　プラチナ")
  .addFields({
    name: "Platinum",
    value:
      "Deal:　1000P\n ========== \n　２:　200P\n　３:　300P\n　４:　400P\n　５:　500P\n　６:　700P\n　７:　1000P\n　８:　赤着席権\n　９:　赤着席権＋50P\n　10:　赤着席権＋100P\n　Ｊ:　VIP着席権×1 or 10PP\n　Ｑ:　VIP着席権×2 or 20PP\n　Ｋ:　VIP着席権×3 or 30PP\n　Ａ:　VIP着席権×5 or 50PP",
    inline: false
  })
  .setColor(1752220);

exports.run = (client, message, args) => {
  if (args[0] == "b" || args[0] == "B") {
    message.channel.send(EmbedBoxB);
  } else if (args[0] == "s" || args[0] == "S") {
    message.channel.send(EmbedBoxS);
  } else if (args[0] == "g" || args[0] == "G") {
    message.channel.send(EmbedBoxG);
  } else if (args[0] == "g+" || args[0] == "G+") {
    message.channel.send(EmbedBoxGp);
  } else if (args[0] == "p" || args[0] == "P") {
    message.channel.send(EmbedBoxP);
  } else {
    message.channel.send(
      "`.box <B/S/G/G+/P>` の形式で入力してください　例: `.box G+`"
    );
    return;
  }
};
