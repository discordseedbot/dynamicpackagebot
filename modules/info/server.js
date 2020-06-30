const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.cmd = function(message) {
	const guild = SB_Client.guilds.get(message.guild.id);
	var data = [];
	data.push(guild.name);
	data.push(guild.id);
	data.push(guild.createdAt);
	data.push(guild.members.size);
	data.push(guild.member(guild.owner) ? guild.owner.toString() : guild.owner.user.tag);
	data.push(guild.roles.size);
	data.push(guild.channels.size);
	data.push(guild.iconURL())
	var evalEmbed = new Discord.RichEmbed()
		.setTitle("Guild Info")
		.addField("Guild Name", data[0], true)
		.addField("Guild ID", data[1], true)
		.addField("Guild Creation Date", data[2], true)
		.addField("Member Count", data[3], true)
		.addField("Owner", data[4], true)
		.addField("Role Count", data[5], true)
		.addField("Channel Count", data[6], true)
		.setAuthor(message.content)
		.setTimestamp()
		.setThumbnail(data[7])
	message.channel.send(evalEmbed);
}
