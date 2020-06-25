const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const response = require("./response.json");

module.exports.cmd = function(message,lib) {
	let evalEmbed = new Discord.RichEmbed()
		.setColor(lib.misc_randHex())
		.setTitle(response.support.title)
		.setDescription(response.support.desc)
		.setTimestamp()
	message.channel.send(evalEmbed);
}
