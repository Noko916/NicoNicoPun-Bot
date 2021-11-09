// Roles
const HRoles =
    [/* Player 12345 */ '390141339377074179', '390144405891317760', '390144775740719105', '390144889666404362', '390144997158289418',
     /* Player 6789  */ '390145097481846807', '390145214850793482', '390145771745574913', '390171461505122318',
     /* PoloBx 12345 */ '421674289951932418', '421674191390244875', '421674640960782337', '825698060674924604', '825698353903173643',
     /* PoloBx 67    */ '825698419053953054', '825698477514162186'];

const testRoles =
    ['894990776445067284', '907460456195711007', '907460795435188254', '907460788774637629'] // test1 test2 test3 test4

// Channels
const HChannels =
    [/* Player 12345 */ '902570380089258045', '902570398091190393', '902570416005062676', '902570433927319552', '902570454894661662',
     /* Player 6789  */ '902570478181437473', '902570497571684444', '901500320033669173', '901500320033669173',
     /* PoloBx 12345 */ '902551895204331550', '902551906075947008', '902551920323989504', '902551937080242196', '902551950468481064',
     /* PoloBx 67    */ '902551962229289040', '902551972199170068'];

const testChannels = ['907448618645061713', '907448728510689350', '907448744927166494'] // te1 te2 te3

module.exports = {
    name: "reset",
    description: `運営用コマンド`,

    async execute(client, message, args) {

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Error: 権限がありません");

        // role解除
        for (var r of HRoles) {
            var rol = await message.guild.roles.fetch(r);

            for (var Rpl of rol.members) {
                
                var pid = Rpl[0];
                var server = client.guilds.cache.get(message.guild.id)
                var pl = await server.members.fetch(pid);
                pl.roles.remove(r);

            }
        }

        // メッセージ削除
        for (var c of HChannels) {
            var dCha = client.channels.cache.get(c)
            var dMsg = await dCha.messages.fetch({ limit: 100 });
            dCha.bulkDelete(dMsg);
        }
    }
}