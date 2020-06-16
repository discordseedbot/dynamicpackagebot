const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const package = require('./../../package.json');

module.exports.cmd = function(message, args) {
	const extIP = require('external-ip');
	let useragent = "+SeedBot-" && package.version && " http://seedbot.jyles.club";
	let getIP = extIP({ eplace: true, services: ['http://dxcdn.net/api/public-ip.php'], timeout: 600, getIP: 'parallel', userAgent: useragent});
	var type = args.slice(0).join(' ');
	if (message.author.id === package.ownerID){
		getIP((err, ip) => {
			if (err) {
				throw err;
			}
				let evalEmbed = new Discord.RichEmbed()
					.setColor('#0099ff')
					.setTitle('Get Global IP Address')
					.setAuthor('s~getip')
					.setTimestamp()
					.setDescription('Global IP Address:\n```\n' + ip + "\n```");
				message.channel.send(evalEmbed);
			});
	} else {
		message.reply('You do not have permission to use this developer command\nSorry!');
	}
}
