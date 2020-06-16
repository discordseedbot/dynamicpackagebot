const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.cmd = function(message, args) {
	var msgId = args.slice(0).join(" ");

	message.delete()

	message.channel.fetchMessages({around: msgId, limit: 1})
	    .then(msg => {
	        const fetchedMsg = msg.first();
	        fetchedMsg.pin();
	    });
}
