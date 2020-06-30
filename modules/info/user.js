const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const prefix = SB_CoreLibrary.prefix().default;

module.exports.cmd = function(message, args) {
	var user;
	var userArgs = args.slice(0).join(" ");
	if (userArgs.length > 1){
		user = message.mentions.users.first();
	} else { user = message.author; }
	const data = [];
	data.push("<@"+user.id+">");
	data.push(user.id);
	data.push(user.createdAt);
	data.push(user.presence.status);
	data.push(message.member.joinedAt);
	data.push(user.avatarURL());
	var evalEmbed = new Discord.RichEmbed()
		.setTitle(message.content)
		.addField("User", data[0], true)
		.addField("User ID", data[1], true)
		.addField("User Creation Date", data[2], true)
		.addField("Status", data[3], true)
		.addField("Join Date", data[4], true)
		.setThumbnail(data[5])

	message.channel.send(evalEmbed)
}
