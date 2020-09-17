const figlet = require('figlet');

module.exports.cmd = function(message, args) {
	var inputText = args.slice(0).join(' ');
	var reply;
	figlet.text(inputText, {
		font: 'Big',
		horizontalLayout: 'default',
		verticalLayout: 'default'
	}, function(err, data) {
		if (err) {
			message.channel.send('Something went wrong...');
			console.dir(err);
		}
		else if (inputText.length > 0) {
			message.channel.send("```" + data + "```");
		} else {
			let finalEmbedMessage = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.addFeild('Syntax Error', 'No Text Specified');
			message.channel.send(finalEmbedMessage);
		}
	});
}
