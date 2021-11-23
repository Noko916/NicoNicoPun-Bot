const Discord = require('discord.js');
const fs = require('fs');
const { Intents, Client, MessageEmbed } = require("discord.js");
const { prefix, version, Mode, isTournament } = require('./config.json');

const options = {
  intents: ["GUILDS", "GUILD_MESSAGES"],
};

const client = new Discord.Client(options);
client.commands = new Discord.Collection();

const cmds = fs.readdirSync(`./commands`).filter(file => file.endsWith('.js'));

for (const file of cmds) {
  const cmd = require(`./commands/${file}`);

  client.commands.set(cmd.name, cmd);
}

// 大会用
if (isTournament) {
  const PlayerRole = ["880761554633641994", "880761972549890088", "880762186606198824", "880762263311626251", "880762336422551622", "880762421751476226", "880762536285315093"]
  const PlayerChID = ["898594296205307924", "898594317281665044", "896698627584561212", "896698653136281640", "896698679807856670", "896698705225342987", "896698724875644948"]
  const LogChID = "880764948584726588";
  const AnnounceChID = "880875110322565150";

  client.on("messageCreate", async message => {

    const MessageChID = message.channel.id;

    if (!PlayerChID.includes(MessageChID) && MessageChID != AnnounceChID) return; // 指定外のチャンネルの発言の場合はreturn;

    if (message.author.bot) return;   // botの場合return

    if (message.content == "~upd") {
      //console.log("Update")
      //for(var i = 0; i < PlayerChID.length; i++){
      for (var i = 0; i < 1; i++) {

        //console.log("Updat2e")
        const RC = message.guild.roles.cache.get(PlayerRole[i]);
        //console.log(RC)
        console.log("------------------------------")
        console.log(RC.members.cache.get("username"));
        console.log("------------------------------")

      }
    }

    if (message.content == "~chk") {

      const RC = message.guild.roles.cache.get(PlayerRole[0]);

      console.log("------------------------------")
      console.log(RC.members)
      console.log("------------------------------")
    }


    // プレイヤーのメッセージをログに収集
    if (PlayerChID.includes(MessageChID)) {

      var sendEmbed = new MessageEmbed()
      .setAuthor(message.member.displayName, message.author.displayAvatarURL())
      .setTitle(`Link`)
      .setURL(`https://discord.com/channels/${m_se}/${m_ch}/${m_id}`)
      .setDescription(message.content)
      .setImage(message.attachments.map(attachment => attachment.url)[0])
      .setFooter(`#${message.channel.name}`, message.guild.iconURL())
      .setTimestamp()

      // 送信
      client.channels.cache.get(LogChID).send({ embeds: [sendEmbed] });
    }

    // アナウンスチャンネルから各プレイヤーチャンネルに一斉にメッセージを送信
    if (MessageChID == AnnounceChID && message.content.startsWith("+")) {

      const cont = message.content;
      const rep = cont.slice(1);

      var sendEmbed = new MessageEmbed()
      .setAuthor(message.member.displayName, message.author.displayAvatarURL())
      .setTitle(`Link`)
      .setURL(`https://discord.com/channels/${m_se}/${m_ch}/${m_id}`)
      .setDescription(rep)
      .setImage(message.attachments.map(attachment => attachment.url)[0])
      .setFooter(`#${message.channel.name}`, message.guild.iconURL())
      .setTimestamp()
      .setColor(15844367);

      PlayerChID.forEach(element => {
        client.channels.cache.get(element).send({ embeds: [sendEmbed] })
      });

      client.channels.cache.get(LogChID).send({ embeds: [sendEmbed] })
    }
  });
}

/* ----------------------------------------------------------------------------------------------- */

// Main
client.on("messageCreate", message => {
  if (message.author.bot) return;

  if (message.content.includes("everyone")) return;

  if (message.mentions.has(client.user)) {
    message.reply(
      "呼びましたか？\n問題が発生した時は、<@221360357191581697> に連絡してください。"
    );
    return;
  }

  /* ----------------------------------------------------------------------------------------------- */

  // お客様サポートの転送

  if (message.channel.id == '777080266824482817') { // 隠れ家Hold'Em #ニコプンお客様サポートセンター

    var m_se = message.guild.id;
    var m_ch = message.channel.id;
    var m_id = message.id;

    var TransfarEmbed = new MessageEmbed()
      .setAuthor(message.member.displayName, message.author.displayAvatarURL())
      .setTitle(`Link`)
      .setURL(`https://discord.com/channels/${m_se}/${m_ch}/${m_id}`)
      .setDescription(message.content)
      .setImage(message.attachments.map(attachment => attachment.url)[0])
      .setFooter(`${message.guild.name} #${message.channel.name}`, message.guild.iconURL())
      .setTimestamp()
      .setColor(1752220);

    client.channels.cache.get('738003249575100447') // にこにこぷん 運営チーム #ボックス報告
    .send({ embeds: [TransfarEmbed] });
  }

  /* ----------------------------------------------------------------------------------------------- */

  if (!message.content.startsWith(prefix)) return; //prefixがついてないコマンドを無視

  //ここから


  let msg = message.content.toUpperCase();
  let sender = message.author;

  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(` `);

  const cmdName = args.shift().toLowerCase();

  //const cmd = args.shift().toLowerCase();
  const cmd = client.commands.get(cmdName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));

  if (!cmd) {
    console.log(`${message.author.tag} ran the command ${prefix}${cmdName}`);
  }

  // commands/xxx.js の読み込み
  try {
    //delete require.cache[require.resolve(`./commands/${cmd}.js`)]; //キャッシュ消去
    console.log(`${message.author.tag} ran the command ${prefix}${cmdName}`);
    cmd.execute(client, message, args);

    //エラー処理
  } catch (e) {
    message.channel.send("そのコマンドはありません")
    console.log(e);

    //確認処理 (console.log で書き出し)
  } finally {
    //console.log(`${message.author.tag} ran the command ${cmd}`);
  }

  return;
  //ここまで
});

client.on("ready", () => {
  client.user.setActivity(`Ver.${version} | ${Mode} Mode `, { type: "PLAYING" });
  console.log("入っているサーバー:");
  var ServerList = client.guilds.cache.map(a => a.name).join(" / ");
  console.log("[ " + ServerList + " ]");
  console.log("Ready! (ver." + version + ")");
});

client.login(process.env.DISCORD_BOT_TOKEN);