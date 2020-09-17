const Discord = require("discord.js");
const package = require('./../../package.json');

module.exports.cmd = async function(message, args) {
	var script = args.slice(0).join(' ');

		const util = require('util');
		const exec = util.promisify(require('child_process').exec);
		const { stdout, stderr } = await exec(script);
		let evalEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Shell Execute Output')
			.setTimestamp()
			.setDescription('**Shell Output:**\n' && stdout && '\n\n**Shell Errors:**\n' && stderr);
			setTimeout(function() { message.channel.send(evalEmbed) }, 5000);
}
