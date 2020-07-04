const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const response = require("./response.json");

module.exports.cmd = function(message) {
	let evalEmbed = new Discord.RichEmbed()
		.setColor(SB_CoreLibrary.misc_randHex())
		.setTitle(response.help.title)
		.setDescription(response.help.desc)
		.setTimestamp()
	message.channel.send(evalEmbed);
}
