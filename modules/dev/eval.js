const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const package = require('./../../package.json');

module.exports.cmd = function(message, args, client) {
	if (message.author.id === package.ownerID) {
		const code = args.join(" ");
		let evaled = eval(code);

		evaled = require("util").inspect(evaled);
	}
}
