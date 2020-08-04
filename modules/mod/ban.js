const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.cmd = function(message,args) {
	let reason = args.slice(1).join(' ');
	let userToKick = message.mentions.users.first();
	if (reason.length < 1) { message.reply('You must supply a reason for the ban.'); return false; }
	if (userToKick === undefined) { message.reply('You must mention someone to kick them.'); return false; }

	if (!message.guild.member(userToKick).kickable){ message.reply('I cannot kick that member'); return false; };
	if (!message.member.permissions.has('BAN_MEMBERS')) {message.reply('You do not have permissions to ban.'); return false;}
	if (!SB_Client.guild.me.permissions.has('BAN_MEMBERS')) {message.reply("I don't have permission to ban!"); return false;}
	message.guild.member(userToKick).ban();

	kickedUserID = message.mentions.users.first().id;

	message.channel.send({embed: {
		color: 770000,
		author: {name:'Banned User'},
		fields: [{
		name: 'Reason // ' + user + ' has been Banned',
		value: 'Reason:\n ' + reason
		}],
			timestamp: 'Banned at ' + new Date(),
			footer: {
			text: 'Banned by ' + message.author.username,
		}
	}});
	SB_Client.channels.get(userToKick).send({embed: {
		color: 770000,
		author: {name:'Banned User'},
		fields: [{
		name: 'Reason // ' + user + ' Banned',
		value: 'Reason:\n ' + reason
		}],
			timestamp: 'Banned at ' + new Date(),
			footer: {
			text: 'Banned by ' + message.author.username,
		}
	}});
}
