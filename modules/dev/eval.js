const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const package = require('./../../package.json');

function escapeRegExp(str) {
	return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
}

function evaluate(input) {
	let result = eval(input);
	if (result)
		result = result.toString().replace(new RegExp(escapeRegExp(SB_Token.discord()), 'g'), '<token removed>');
	return result;
}

module.exports.cmd = function(message, args) {
		const code = args.join(" ");

		evaled = require("util").inspect(evaluate(code));
		message.channel.send("```"+evaled+"```")
}
