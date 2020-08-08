const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports = async function(message,args) {
	let arglimit = args.slice(0).join(' ');
	const user = message.mentions.users.first();
	// Parse Amount
	const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
	if (!amount) return message.reply('Must specify an amount to delete!');
	if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
	if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply('You do not have permissions to purge.');

	message.channel.bulkDelete(arglimit).then(async () => {
		var msg = await message.channel.send(`:white_check_mark: Done!\r\nPurged \`${arglimit}\` message(s).`);
		setTimeout(function() {
			msg.delete();
		},5*1000);
	})
}
