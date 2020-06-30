const Discord = require("discord.js");

module.exports.kick = function(message, args) {
	let reason = args.slice(1).join(' ');
	let userToKick = message.mentions.users.first();
	if (reason.length < 1) { message.reply('You must supply a reason for the kick.'); return false; }
	if (userToKick === undefined) { message.reply('You must mention someone to kick them.'); return false; }

	if (!message.guild.member(userToKick).kickable){ message.reply('I cannot kick that member'); return false; };
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

module.exports.members.ban = function(message,args) {
	let reason = args.slice(1).join(' ');
	let userToKick = message.mentions.users.first();
	if (reason.length < 1) { message.reply('You must supply a reason for the.members.ban.'); return false; }
	if (userToKick === undefined) { message.reply('You must mention someone to kick them.'); return false; }

	if (!message.guild.member(userToKick).kickable){ message.reply('I cannot kick that member'); return false; };
	message.guild.member(userToKick).members.ban();

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

module.exports.purge = function(message,args) {
	let arglimit = args.slice(0).join(' ');
	const user = message.mentions.users.first();
	// Parse Amount
	const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
	if (!amount) return message.reply('Must specify an amount to delete!');
	if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
	// Fetch 100 messages (will be filtered and lowered up to max amount requested)
	message.channel.messages.fetch({
		limit: arglimit,
	}).then((messages) => {
		if (user) {
		const filterBy = user ? user.id : Client.user.id;
		messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
		}
		message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
	});
}
