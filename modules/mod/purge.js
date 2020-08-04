const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.cmd = function(message,args) {
	let arglimit = args.slice(0).join(' ');
	const user = message.mentions.users.first();
	// Parse Amount
	const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
	if (!amount) return message.reply('Must specify an amount to delete!');
	if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
	if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply('You do not have permissions to purge.');
	// Fetch 100 messages (will be filtered and lowered up to max amount requested)
	message.channel.fetchMessages({
		limit: arglimit,
	}).then((messages) => {
		if (user) {
		const filterBy = user ? user.id : SB_Client.user.id;
		messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
		}
		message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
	});
}
