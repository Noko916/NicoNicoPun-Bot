const Discord = require("discord.js");
const { MessageEmbed, MessageButton } = require('discord.js');

const EmbedBoxB = new MessageEmbed()
  .setTitle("箱開け報酬 ブロンズ")
  .addFields({
    name: "Bronze",
    value:
      "Deal:　5P\n ========== \n　２:　-\n　３:　-\n　４:　-\n　５:　-\n　６:　-\n　７:　5P\n　８:　10P\n　９:　15P\n　10:　20P\n　Ｊ:　25P\n　Ｑ:　30P\n　Ｋ:　抽選数字+2\n　Ａ:　青着席権(Lv.15)",
    inline: false
  })
  .setColor(1752220);

const EmbedBoxS = new MessageEmbed()
  .setTitle("箱開け報酬　シルバー")
  .addFields({
    name: "Silver",
    value:
      "Deal:　20P\n ========== \n　２:　5P\n　３:　5P\n　４:　5P\n　５:　10P\n　６:　10P\n　７:　15P\n　８:　30P\n　９:　50P\n　10:　100P\n　Ｊ:　抽選数字＋２\n　Ｑ:　青着席権（Lv.15）\n　Ｋ:　青着席権（Lv.20）\n　Ａ:　青着席権（Lv.∞）",
    inline: false
  })
  .setColor(1752220);

const EmbedBoxG = new MessageEmbed()
  .setTitle("箱開け報酬　ゴールド")
  .addFields({
    name: "Gold",
    value:
      "Deal:　100P\n ========== \n　２:　30P\n　３:　30P\n　４:　30P\n　５:　50P\n　６:　100P\n　７:　200P\n　８:　300P\n　９:　青着席権（Lv.20）\n　10:　青着席権（Lv.∞）\n　Ｊ:　青着席権（Lv.∞）＋50P\n　Ｑ:　赤着席権\n　Ｋ:　赤着席権＋50P\n　Ａ:　VIP着席権×1 or 10PP",
    inline: false
  })
  .setColor(1752220);

const EmbedBoxGp = new MessageEmbed()
  .setTitle("箱開け報酬　ゴールド +")
  .addFields({
    name: "Gold+",
    value:
      "Deal:　200P\n ========== \n　２:　30P\n　３:　30P\n　４:　50P\n　５:　100P\n　６:　200P\n　７:　300P\n　８:　青着席権（Lv.20）\n　９:　青着席権（Lv.∞）\n　10:　青着席権（Lv.∞）＋50P\n　Ｊ:　赤着席権\n　Ｑ:　赤着席権＋50P\n　Ｋ:　VIP着席権×1 or 10PP\n　Ａ:　VIP着席権×2 or 20PP",
    inline: false
  })
  .setColor(1752220);

const EmbedBoxP = new MessageEmbed()
  .setTitle("箱開け報酬　プラチナ")
  .addFields({
    name: "Platinum",
    value:
      "Deal:　1000P\n ========== \n　２:　200P\n　３:　300P\n　４:　400P\n　５:　500P\n　６:　700P\n　７:　1000P\n　８:　赤着席権\n　９:　赤着席権＋50P\n　10:　赤着席権＋100P\n　Ｊ:　VIP着席権×1 or 10PP\n　Ｑ:　VIP着席権×2 or 20PP\n　Ｋ:　VIP着席権×3 or 30PP\n　Ａ:　VIP着席権×5 or 50PP",
    inline: false
  })
  .setColor(1752220);


const Button_B = new MessageButton()
  .setCustomId("Button_B")
  .setStyle("PRIMARY")
  .setLabel("B")

const Button_S = new MessageButton()
  .setCustomId("Button_S")
  .setStyle("PRIMARY")
  .setLabel("S")

const Button_G = new MessageButton()
  .setCustomId("Button_G")
  .setStyle("PRIMARY")
  .setLabel("G")

const Button_GP = new MessageButton()
  .setCustomId("Button_GP")
  .setStyle("PRIMARY")
  .setLabel("G+")

const Button_P = new MessageButton()
  .setCustomId("Button_P")
  .setStyle("PRIMARY")
  .setLabel("P")


module.exports = {
  name: "box",
  description: `箱開け報酬の一覧を表示します\n\`.box <b/s/g/g+/p>\``,

  async execute(client, message, args) {

    const choosebox = await message.channel.send({
      content: "ボックスを選択してください",
      components: [
        new Discord.MessageActionRow().addComponents(Button_B),
        new Discord.MessageActionRow().addComponents(Button_S),
        new Discord.MessageActionRow().addComponents(Button_G),
        new Discord.MessageActionRow().addComponents(Button_GP),
        new Discord.MessageActionRow().addComponents(Button_P)]
    });

    client.once('interactionCreate', async (interaction) => {

      const Ans = interaction.customId;
      console.log(">> Button: " + Ans)
      choosebox.delete();

      switch (Ans) {
        case "Button_B":
          message.channel.send({ embeds: [EmbedBoxB] });
          break;

        case "Button_S":
          message.channel.send({ embeds: [EmbedBoxS] });
          break;

        case "Button_G":
          message.channel.send({ embeds: [EmbedBoxG] });
          break;

        case "Button_GP":
          message.channel.send({ embeds: [EmbedBoxGp] });
          break;

        case "Button_P":
          message.channel.send({ embeds: [EmbedBoxP] });
          break;
      }
    })
  }
};
