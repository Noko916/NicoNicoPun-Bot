const Discord = require("discord.js");

exports.run = (client, message, args) => {
  var array = args;

  //console.log(args);
  console.log(array);
  
  message.channel.send(array[Math.floor(Math.random() * array.length)]);
  return;
};
