const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const package = SB.package;

module.exports.cmd = function(message) {
	let evalEmbed = new Discord.MessageEmbed()
		.setColor(SB.core.misc_randHex())
		.setTitle("SeedBot Info")
		.setDescription("**Version:** " + package.version + "\n**Build:** " + package.build.number + "\n**Build Date:** " + package.build.date + "\n**Branch:** " + package.branch + "\n**OwnerID:** " + package.ownerID + "\n**API Web Address:** " + SB.prefrences.api.network.address + "\n**Branch Repo:** " + package.homepage + "?git-" + package.branch)
		.setTimestamp()
	message.channel.send(evalEmbed);
}
