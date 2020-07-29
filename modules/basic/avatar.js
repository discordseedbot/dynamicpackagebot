const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const SB_Client = new Discord.Client();
const response = require("./response.json");

module.exports.cmd = function(message) {
	var avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL : message.author.avatarURL;
	if (message.mentions.users.size > 0) {
		message.channel.send(`Avatar for, **${message.mentions.users.first().username}:**\n${avatar}`);
	} else {
		message.channel.send(`Avatar for, **${message.author.username}:**\n${avatar}`);
	}
}
