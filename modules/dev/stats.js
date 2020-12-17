const Discord = require("discord.js");

module.exports.work = function(message,args) {
	let msg2sd = new Discord.MessageEmbed() .setColor(SB.core.misc_randHex()) .setTimestamp()
	switch(args.slice(0).join(' ').toLowerCase()) {
		case "usercount":
			msg2sd.setTitle('User Count')
			.setDescription(SB.core.stats.memberCount);
			break;
		case "serverlist":
			msg2sd.setTitle('Server List')
			.setAuthor("Number of Available Servers: " + SB.core.stats.guildCount)
			.setDescription(SB.client.guilds.cache.map(m => m.name).join("\n"));
			break;
		case "channelcount":
			msg2sd.setTitle('Channel Count')
			.setDescription(SB.core.stats.channelCount);
			break;
		default:
			return;
			break;
	}
	message.channel.send(msg2sd);
}
