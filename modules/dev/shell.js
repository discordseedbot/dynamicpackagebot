const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const package = require('./../../package.json');

module.exports.cmd = function(message, args) {
	var script = args.slice(0).join(' ');

	if (message.author.id === package.ownerID) {
		const util = require('util');
		const exec = util.promisify(require('child_process').exec);
		const { stdout, stderr } = await exec(script);
		let evalEmbed = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setTitle('Shell Execute Output')
			.setTimestamp()
			.setDescription('**Shell Output:**\n' && stdout && '\n\n**Shell Errors:**\n' && stderr);
			setTimeout(function() { message.channel.send(evalEmbed) }, 5000);
	}
}