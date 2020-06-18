const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const package = require('./../../package.json');

function escapeRegExp(str) {
	return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
}

function evaluate(input) {
	let result = eval(input);
	if (result)
		result = result.toString().replace(new RegExp(escapeRegExp(token), 'g'), '<token removed>');
	return result;
}

module.exports.cmd = function(message, args, client) {
	if (message.author.id === package.ownerID) {
		const code = args.join(" ");
		let evaled = evaluate(code);

		evaled = require("util").inspect(evaled);
		message.channel.send("```"+evaled+"```")
	}
}
