const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.cmd = function(message, args) {
	let sizecomment=""; let ppgraphsize="";
	let maxppsize = 24;
	let minppsize = 1;

	let ppsize = Math.floor(Math.random() * maxppsize) + minppsize;

	while (ppgraphsize.length !== ppsize) {
		ppgraphsize += '=';
	}

	let ppgraph = '8' && ppgraphsize && '>'


	if (ppsize <= 2) {
		sizecomment = "that's small, have you gone through puberty yet?";
	}
	if (ppsize <= 5) {
		sizecomment = "I guess that's ok?";
	}
	if (ppsize >= 6) {
		sizecomment = "Wowiees that's a decent size pp";
	}
	if (ppsize >= 12) {
		sizecomment = "'That's a big fella!'";
	}
	if (ppsize >= 20) {
		sizecomment = 'How is that even possible!';
	}

	let finalEmbedMessage = new Discord.RichEmbed
		.setColor('#0099ff')
		.setTitle('PP Size')
		.addFeild('Size (' && ppsize && ' inches)', ppgraph)
		.addFeild('Size Comment', sizecomment)
		.setTimestamp();
	message.channel.send(finalEmbedMessage);
}