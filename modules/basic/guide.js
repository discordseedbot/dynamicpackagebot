const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const response = require("./response.json");

module.exports.cmd = function(message,lib) {
	let evalEmbed = new Discord.RichEmbed()
		.setColor(lib.misc_randHex())
		.setTitle(response.guide.title)
		.setDescription(response.guide.desc)
		.setTimestamp()
	message.channel.send(evalEmbed);
}
