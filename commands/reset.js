const Discord = require('discord.js');
const { MessageButton } = require('discord.js');

// Roles
const HRoles =
    [/* Player 12345 */ '390141339377074179', '390144405891317760', '390144775740719105', '390144889666404362', '390144997158289418',
     /* Player 6789  */ '390145097481846807', '390145214850793482', '390145771745574913', '390171461505122318']

const PRoles =
    [/* PoloBx 12345 */ '421674289951932418', '421674191390244875', '421674640960782337', '825698060674924604', '825698353903173643',
     /* PoloBx 67    */ '825698419053953054', '825698477514162186'];

const testRoles =
    ['894990776445067284', '907460456195711007', '907460795435188254', '907460788774637629'] // test1 test2 test3 test4


// Channels
const HChannels =
    [/* Player 12345 */ '902570380089258045', '902570398091190393', '902570416005062676', '902570433927319552', '902570454894661662',
     /* Player 6789  */ '902570478181437473', '902570497571684444', '901500320033669173', '901500320033669173']

const PChannels =
    [/* PoloBx 12345 */ '902551895204331550', '902551906075947008', '902551920323989504', '902551937080242196', '902551950468481064',
     /* PoloBx 67    */ '902551962229289040', '902551972199170068'];

const testChannels = ['907448618645061713', '907448728510689350', '907448744927166494'] // te1 te2 te3


const NORMAL = new MessageButton()
    .setCustomId("NORMAL")
    .setStyle("PRIMARY")
    .setLabel("通常 ボックス")

const POLO = new MessageButton()
    .setCustomId("POLO")
    .setStyle("PRIMARY")
    .setLabel("POLO ボックス")

const CONFIRM = new MessageButton()
    .setCustomId("CONFIRM")
    .setStyle("SUCCESS")
    .setLabel("OK")

const CANCEL = new MessageButton()
    .setCustomId("CANCEL")
    .setStyle("DANGER")
    .setLabel("キャンセル")

module.exports = {
    name: "reset",
    description: `運営用コマンド`,

    async execute(client, message, args) {

        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Error: 権限がありません");

        const choosebox = await message.channel.send({
            content: "どのボックスをリセットしますか？",
            components: [
                new Discord.MessageActionRow().addComponents(NORMAL),
                new Discord.MessageActionRow().addComponents(POLO),
                new Discord.MessageActionRow().addComponents(CANCEL)]
        });

        var confirmation = null;

        client.once('interactionCreate', async (interaction) => {
            const Ans1 = interaction.customId;
            console.log(">> Button: " + Ans1)
            choosebox.delete();

            if (interaction.customId === "CANCEL") {
                await message.channel.send({ content: "キャンセルしました" })
                return
            } else {
                confirmation = await message.channel.send({
                    content: `確認: ** ${Ans1} ボックス**  をリセットします。よろしいですか？`,
                    components: [
                        new Discord.MessageActionRow().addComponents(CONFIRM),
                        new Discord.MessageActionRow().addComponents(CANCEL)]
                });
            }

            client.once('interactionCreate', async (interaction) => {
                const Ans2 = interaction.customId;
                console.log(">> Button: " + Ans2)
                confirmation.delete();

                if (Ans2 === "CONFIRM") {

                    const Ro = (Ans1 === "NORMAL" ? HRoles : PRoles);
                    const Ch = (Ans1 === "NORMAL" ? HChannels : PChannels);

                    // role解除
                    for (var r of Ro) {
                        var rol = await message.guild.roles.fetch(r);

                        for (var Rpl of rol.members) {

                            var pid = Rpl[0];
                            var server = client.guilds.cache.get(message.guild.id)
                            var pl = await server.members.fetch(pid);
                            pl.roles.remove(r);

                        }
                    }

                    // メッセージ削除
                    for (var c of Ch) {
                        var dCha = client.channels.cache.get(c)
                        var dMsg = await dCha.messages.fetch({ limit: 100 });
                        dCha.bulkDelete(dMsg);
                    }

                } else {
                    await message.channel.send({ content: "キャンセルしました" }); return;
                }
            })
        })
    }
}