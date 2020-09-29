const Discord = require("discord.js");
const package = SB.package

function escapeRegExp(str) {
	return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
}

function evaluate(input) {
	let result = eval(input);
	if (result)
		result = result.toString().replace(new RegExp(escapeRegExp(SB.token.discord, 'g'), '<token removed>');
	return result;
}

module.exports.cmd = function(message, args) {
	const code = args.join(" ");
	console.log(code)

	evaled = require("util").inspect(code);
	message.channel.send("input: ```"+evaled+"```\noutput: ```"+eval(code)+"```")
}
