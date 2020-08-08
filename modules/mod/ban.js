const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports = function(message,args) {
	let reason = args.slice(1).join(' ');
	let banReason = reason;
	let userToBan = message.mentions.users.first();
	if (reason.length < 1) { message.reply('You must supply a reason for the ban.'); return false; }
	if (userToBan === undefined) { message.reply('You must mention someone to ban them.'); return false; }

	if (!message.guild.member(userToBan).bannable){ message.reply('I cannot ban that member'); return false; };
	if (!message.member.hasPermission('BAN_MEMBERS')) {message.reply('You do not have permissions to ban.'); return false;}
	if (!message.guild.me.hasPermission('BAN_MEMBERS')) {message.reply("I don't have permission to ban!"); return false;}
	message.guild.member(message.mentions.users.first()).ban({reason: banReason}).then((member) => {
		bannedUserID = message.mentions.users.first().id;

		message.channel.send({embed: {
			color: 770000,
			author: {name:`User was banned from ${message.guild.name}`},
			fields: [{
				name: `Reason // ${member.displayName} was banned`,
				value: `${reason}`
			}],
			timestamp: `Banned at; ${new Date()}`,
			footer: {
				text: `Banned by; ${message.author.username}`
			}
		}});
		SB_Client.users.cache.get(userToBan.id).send({embed: {
			color: 770000,
			author: {name:`You were banned from ${message.guild.name}`},
			fields: [{
				name: `Reason // ${member.displayName} banned`,
				value: `${reason}`
			}],
			timestamp: `Banned at; ${new Date()}`,
			footer: {
				text: `Banned by; ${message.author.username}`
			}
		}});
	})
}
