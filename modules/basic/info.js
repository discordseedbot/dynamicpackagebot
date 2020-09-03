const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const package = require("./../../package.json");

module.exports.cmd = function(message) {
	let evalEmbed = new Discord.RichEmbed()
		.setColor(SB_CoreLibrary.misc_randHex())
		.setTitle("SeedBot Info")
		.setDescription("**Version:** " + package.version + "\n**Build:** " + package.build.mumber + "\n**Build Date:** " + package.build.date + "\n**Branch:** " + package.branch + "\n**OwnerID:** " + package.ownerID + "\n**API Web Address:** " + package.apiURL + "\n**Branch Repo:** " + package.homepage + "?git-" + package.branch)
		.setTimestamp()
	message.channel.send(evalEmbed);
}
