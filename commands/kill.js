const Discord = require("discord.js");

module.exports = {
    name: "kill",
    description: "kill",

    async execute(client, message, args) {

        message.channel.send("テスト用コマンドの為実行不可")
        //client.destroy();

    },
};
