const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.cmd = function(message, args) {
	let count = args[0];
	let msg = args.join(" ");
	msg = msg.substr(count.length + 1);

	for(var i = 1; i <= count; i++) {
	  setTimeout(function () {
		  message.channel.send(msg);
	  }, 1000);
	}
}
