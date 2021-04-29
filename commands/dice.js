const Discord = require("discord.js");

module.exports = {
  name: "dice",
  description: "サイコロを振ってくれます (20個以下, 1000面以下)\n.dice ke...? なにそれ\n\`.dice <個数>d<面>\`",
  aliases: ["roll"],

  async execute(client, message, args) {
    var ResultList1 = [];
    var commandArgs = args[0].split("d");

    if (commandArgs[0] === "ke") {
      message.channel.send(`<:Daisuke:688466011279720494>`);
    } else if (
      isNaN(commandArgs[0] || commandArgs[1]) || //数字only
      commandArgs[0] === "" ||
      commandArgs[1] === "" //**何もない**をはじく
    ) {
      message.channel.send(`[?d??] の形式で入力してください \`例: 2d6 , 1d100\``);
    } else if (
      !Number.isInteger(Number(commandArgs[0])) ||
      !Number.isInteger(Number(commandArgs[1])) ||
      (commandArgs[0] <= 0 || commandArgs[1] <= 0) //自然数制限
    ) {
      message.channel.send(`自然数を入力してください`);
    } else if (
      commandArgs[0] > 20 //個数制限
    ) {
      message.channel.send(`ダイスは20個以下にしてください`);
    } else if (
      commandArgs[1] > 1000 //ダイス目制限
    ) {
      message.channel.send(`1000以下のダイスにしてください`);
    } else {
      var commandArgs = args[0].split("d");
      for (let x = 0; x < commandArgs[0]; x++) {
        var dice = Math.floor(Math.random() * Math.floor(commandArgs[1])) + 1;
        ResultList1.push(dice);
      }

      var sum = function (ResultList1) {
        var sum = 0;
        ResultList1.forEach(function (elm) {
          sum += elm;
        });
        return sum;
      };

      var ResultList2 = ResultList1.join(" , ");


      message.channel.send(`[ ${ResultList2} ]  TOTAL: **${sum(ResultList1)}**`);
      console.log(`[ ${ResultList2} ]  TOTAL: **${sum(ResultList1)}**`);

      return;
    }
  },
};
