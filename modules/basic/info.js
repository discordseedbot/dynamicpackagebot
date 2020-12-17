const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const package = SB.package;

module.exports.cmd = function(message) {
	let evalEmbed = new Discord.MessageEmbed()
		.setColor(SB.core.misc_randHex())
		.setTitle("SeedBot Info")
		.setDescription("**Version:** " + SB.dist.version + "\n**Build:** " + SB.dist.build.number + "\n**Build Date:** " + SB.dist.build.date + "\n**Branch:** " + package.branch + "\n**OwnerID:** " + package.ownerID + "\n**API Web Address:** " + SB.prefrences.api.network.address + "\n**Branch Repo:** " + package.homepage + "?git-" + package.branch)
		.setTimestamp()
		.addField("Base Info","**Version:** " + SB.dist.base.version + "\n**Build:** " + SB.dist.base.build.number + "\n**Build Date:** " + SB.dist.base.build.date)
	message.channel.send(evalEmbed);
}
