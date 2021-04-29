const Discord = require("discord.js");
const LimitNum = 35;

module.exports = {
    name: "delete",
    description: `メッセージを消去します\n${LimitNum} 件まで一括で消去可能\n14 日以上前のメッセージが含まれている時は削除できません\n\`.delete [件数]\``,

    async execute(client, message, args) {

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Error: 権限がありません");

        if (args[0] > LimitNum) return message.channel.send(`${LimitNum} 件までにしてください`);

        let limitMsg = 0;

        if (!args[0]) { limitMsg = 1; } else { limitMsg = args[0]; }

        limitMsg = Number(limitMsg) + 1;

        const dMsg = await message.channel.messages.fetch({ limit: limitMsg });
        
        dMsg.forEach(msg => {
            console.log(` >> [${msg.createdAt}] ${msg.author.tag}: ${msg.content}`);
        });
        
        console.log();

        message.channel.bulkDelete(dMsg);
        message.channel.send(`${message.member.displayName} が ${limitMsg - 1} 件のメッセージを消去しました`);

        //message.channel.send(`\`\`\`args  ` + args + `\nlimit ` + limitMsg + `\`\`\``);

        return;
    }
};
