const Discord = require("discord.js");

module.exports.work = function(message,args) {
	let msg2sd = new Discord.MessageEmbed() .setColor(SB.core.misc_randHex()) .setTimestamp()
	switch(args.slice(0).join(' ')) {
		case "usercount":
			msg2sd.setTitle('User Count')
			.setDescription(SB.core.userCount());
			break;
		case "serverlist":
			msg2sd.setTitle('Server List')
			.setAuthor("Number of Available Servers: " + SB.core.guildCount())
			.setDescription(SB.client.guilds.cache.map(m => m.name).join("\n"));
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
