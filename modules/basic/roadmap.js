const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const response = require("./response.json");

module.exports.cmd = function(message,lib) {
	let evalEmbed = new Discord.RichEmbed()
		.setColor(lib.misc_randHex())
		.setTitle(response.roadmap.title)
		.setDescription(response.roadmap.desc)
		.setTimestamp()
	message.channel.send(evalEmbed);
}
