const { prefix } = require('../config.json');
const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "コマンドの使い方を表示します",
  aliases: ["halp", "welp", "walp", "command", "commands", "cmd", "herupu"],

  async execute(client, message, args) {
    const EmbedHelp = new Discord.MessageEmbed().setColor(1752220);
    const { commands } = message.client;

    if (!args.length) {

      EmbedHelp
        .setTitle("使えるコマンドはこちら")

        .setDescription(`${prefix}` + commands.map(c => c.name).join(`\n${prefix}`))
        .setFooter(`${prefix}help [command name]   で詳細を表示します`);
      message.channel.send(EmbedHelp);

      return;
    }

    const name = args[0];
    const cmd = commands.get(name)
      || commands.find(c => c.aliases && c.aliases.includes(name));

    if (!cmd) {
      message.reply(`\`${prefix}${name}}\` なんてコマンドないよ！！`)

      return;
    }

    EmbedHelp.setTitle(`${prefix}${cmd.name}`);
    if (cmd.description) EmbedHelp.addField(`Description`, cmd.description);
    if (cmd.aliases)     EmbedHelp.addField(`Aliases`,     cmd.aliases.join(', '));

    message.channel.send(EmbedHelp);
  }
}