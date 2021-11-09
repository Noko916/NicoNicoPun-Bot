const Discord = require("discord.js");
const LimitNum = 35;

const Channels =
    [902570380089258045, 902570398091190393, 902570416005062676, 902570433927319552, 902570454894661662,
        902570478181437473, 902570497571684444, 901500320033669173, 901500320033669173,
        902551895204331550, 902551906075947008, 902551920323989504, 902551937080242196, 902551950468481064,
        902551962229289040, 902551972199170068];

const testChannels = [749403949903380560, 664453697425768527, 668726812276293632]

module.exports = {
    name: "delete",
    description: `メッセージを消去します\n${LimitNum} 件まで一括で消去可能\n14 日以上前のメッセージが含まれている時は削除できません\n\`.delete [件数]\``,
    aliases: ["reset"],

    async execute(client, message, args) {

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Error: 権限がありません");

        console.log(message.content);

        if (message.content.includes("delete")) {

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

            return;

        } else if (message.content == ".reset") {

            for(var c in testChannels){
                const ch = client.channels.cache.get(String(c)).send("a");
                console.log(ch);
                //const dMsg = await ch.messages.fetch({ limit: 100 });
                //message.channel.bulkDelete(dMsg);
            }
        }
    }
};
