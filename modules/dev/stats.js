const Discord = require("discord.js");

module.exports.work = function(message,args) {
	let msg2sd = new Discord.MessageEmbed() .setColor(SB_CoreLibrary.misc_randHex()) .setTimestamp()
	switch(args.slice(0).join(' ')) {
		case "usercount":
			msg2sd.setTitle('User Count')
			.setDescription(SB_CoreLibrary.userCount());
			break;
		case "serverlist":
			msg2sd.setTitle('Server List')
			.setAuthor("Number of Available Servers: " + SB_CoreLibrary.guildCount())
			.setDescription(SB_Client.guilds.cache.map(m => m.name).join("\n"));
			break;
		case "channelcount":
			msg2sd.setTitle('Channel Count')
			.setDescription(channelcount);
			break;
		default:
			return;
			break;
	}
	message.channel.send(msg2sd);
}
