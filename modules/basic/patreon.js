const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const response = require("./response.json");

module.exports.cmd = function(message,lib) {
	let evalEmbed = new Discord.RichEmbed()
		.setColor(lib.misc_randHex())
		.setTitle(response.patreon.title)
		.setDescription(response.patreon.desc)
		.setTimestamp()
	message.channel.send(evalEmbed);
}
