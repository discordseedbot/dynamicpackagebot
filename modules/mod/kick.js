const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.cmd = function(message,args) {
	let reason = args.slice(1).join(' ');
	let userToKick = message.mentions.users.first();
	if (reason.length < 1) { message.reply('You must supply a reason for the kick.'); return false; }
	if (userToKick === undefined) { message.reply('You must mention someone to kick them.'); return false; }

	if (!message.guild.member(userToKick).kickable){ message.reply('I cannot kick that member'); return false; };
	if (!message.member.permissions.has('KICK_MEMBERS')) {message.reply('You do not have permissions to kick.'); return false;}
	if (!SB_Client.guild.me.permissions.has('KICK_MEMBERS')) {message.reply("I don't have permission to kick!"); return false;}
	message.guild.member(userToKick).kick();

	kickedUserID = message.mentions.users.first().id;

	message.channel.send({embed: {
		color: 770000,
		author: {name:'Kicked User'},
		fields: [{
		name: 'Reason // ' + user + ' has been Kicked',
		value: 'Reason:\n ' + reason
		}],
			timestamp: 'Kicked at ' + new Date(),
			footer: {
			text: 'Kicked by ' + message.author.username,
		}
	}});
	SB_Client.channels.get(userToKick).send({embed: {
		color: 770000,
		author: {name:'Kicked User'},
		fields: [{
		name: 'Reason // ' + user + ' Kicked',
		value: 'Reason:\n ' + reason
		}],
			timestamp: 'Kicked at ' + new Date(),
			footer: {
			text: 'Kicked by ' + message.author.username,
		}
	}});
}
