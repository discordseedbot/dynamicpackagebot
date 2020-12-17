const package = require('./../../package.json');

module.exports.cmd = function(message,args) {
	let guildid = args.slice(0).join(' ');
	let guild = SB.client.guilds.cache.get(guildid);
	if (!guild) return message.reply("The bot isn't in the guild with this ID.");

	var channelToCreateInviteIn = {};
	SB.client.guilds.cache.get(guildid).channels.cache.array().forEach((channel)=>{
		if (channel.type.toLowerCase() == 'text') {
			channelToCreateInviteIn = channel;
		}
	})
	channelToCreateInviteIn.createInvite()
	.then(invite => message.reply(`Created an invite with a code of ${invite.code}\r\nhttps://discord.gg/${invite.code}`))
}
