const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports = function(message,args) {
	let reason = args.slice(1).join(' ');
	let userToKick = message.mentions.users.first();
	if (reason.length < 1) { message.reply('You must supply a reason for the kick.'); return false; }
	if (userToKick === undefined) { message.reply('You must mention someone to kick them.'); return false; }

	if (!message.guild.member(userToKick).kickable){ message.reply('I cannot kick that member'); return false; };
	if (!message.member.hasPermission('KICK_MEMBERS')) {message.reply('You do not have permissions to kick.'); return false;}
	if (!message.guild.me.hasPermission('KICK_MEMBERS')) {message.reply("I don't have permission to kick!"); return false;}
	message.guild.member(message.mentions.users.first()).kick(reason).then((member) => {
		kickedUserID = message.mentions.users.first().id;

		message.channel.send({embed: {
			color: 770000,
			author: {name:`User was kicked from ${message.guild.name}`},
			fields: [{
				name: `Reason // ${member.displayName} was kicked`,
				value: `${reason}`
			}],
			timestamp: `Kicked at; ${new Date()}`,
			footer: {
				text: `Kicked by; ${message.author.username}`
			}
		}});
		SB_Client.users.cache.get(userToKick.id).send({embed: {
			color: 770000,
			author: {name:`You were Kicked from ${message.guild.name}`},
			fields: [{
				name: `Reason // ${member.displayName} kicked`,
				value: `${reason}`
			}],
			timestamp: `Kicked at; ${new Date()}`,
			footer: {
				text: `Kicked by; ${message.author.username}`
			}
		}});
	})
}
