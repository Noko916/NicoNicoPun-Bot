const { prefix } = require('../config.json');
const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "help",
  description: "コマンドの使い方を表示します",
  aliases: ["halp", "welp", "walp", "command", "commands", "cmd", "herupu"],

  async execute(client, message, args) {
    const { commands } = message.client;
    const Embed = new MessageEmbed()
      .setColor(1752220);

    if (!args.length) {

      Embed
        .setTitle("使えるコマンドはこちら")
        .setDescription(`${prefix}` + commands.map(c => c.name).join(`\n${prefix}`))
        .setFooter(`${prefix}help [command name]   で詳細を表示します`);
      message.channel.send({ embeds: [Embed] });

      return;
    }

    const name = args[0];
    const cmd = commands.get(name)
      || commands.find(c => c.aliases && c.aliases.includes(name));

    if (!cmd) {
      message.reply(`\`${prefix}${name}\` は見つかりませんでした`)

      return;
    }

    Embed.setTitle(`${prefix}${cmd.name}`);
    if (cmd.description) Embed.addField(`Description`, cmd.description);
    if (cmd.aliases) Embed.addField(`Aliases`, cmd.aliases.join(', '));

    message.channel.send({ embeds: [Embed] });
  }
}