const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const response = require("./response.json");

module.exports.cmd = function(message) {
	let evalEmbed = new Discord.MessageEmbed()
		.setColor(SB.core.misc_randHex())
		.setTitle(response.patreon.title)
		.setDescription(response.patreon.desc)
		.setTimestamp()
	message.channel.send(evalEmbed);
}
