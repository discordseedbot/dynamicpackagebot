const prefixJSON = require("./../../prefix.json");
const errorDataJSON = require("./alert_handle_channels.json");
const Discord = require("discord.js");

module.exports.developerError = function (client,message,error) {
		if (message.author.bot) return;
		let devErrorSend = new Discord.RichEmbed()
			.setColor(require("./../functions/main.js").randomhexcolor())
			.setTitle("Command Error")
			.setFooter(message.content)
			.setTimestamp()
			.setDescription(error)
			.addField("Guild Info",`ID: ${message.member.guild.id}\nName: ${message.member.guild.name}`)
			.addField("User Info",`ID: ${message.author.id}\nUName: @${message.author.username}#${message.author.discriminator}`)
			.addField("Message Info", "Content: `"+message.content+"`\n"+`Channel Name: ${message.channel.name}\nChannel ID: ${message.channel.id}`)
		client.channels.get(errorDataJSON.developer.error).send(devErrorSend);
}
module.exports.userspaceError = function (client,message,error) {
		if (message.author.bot) return;
		let usrErrorSend = new Discord.RichEmbed()
			.setColor(require("./../functions/main.js").randomhexcolor())
			.setTitle("Command Error")
			.setFooter(message.content)
			.setTimestamp()
			.setDescription(error)
			.addField("Guild Info",`ID: ${message.member.guild.id}\nName: ${message.member.guild.name}`)
			.addField("User Info",`ID: ${message.author.id}\nUName: @${message.author.username}#${message.author.discriminator}`)
			.addField("Message Info", "Content: `"+message.content+"`\n"+`Channel Name: ${message.channel.name}\nChannel ID: ${message.channel.id}`)
		client.channels.get(errorDataJSON.userspaceError.error).send(usrErrorSend);
}

module.exports.notifDeveloper = function(client,content) {
		client.channels.get(errorDataJSON.developer.notifications).send(content);
}
module.exports.developerUnauthAccess = function(client,message) {
	let developerUnauthAccessMSG = new Discord.RichEmbed()
		.setColor(require("./../functions/main.js").randomhexcolor())
		.setTitle("Invalid User tried to access a Developer Command")
		.setTimestamp()
		.addField("Guild Info",`ID: ${message.member.guild.id}\nName: ${message.member.guild.name}`)
		.addField("User Info",`ID: ${message.author.id}\nUName: @${message.author.username}#${message.author.discriminator}`)
		.addField("Message Info", "Content: `"+message.content+"`\n"+`Channel Name: ${message.channel.name}\nChannel ID: ${message.channel.id}`)
		.setAuthor(message.contents)
	client.channels.get(errorDataJSON.developer.unauthAccess).send(developerUnauthAccessMSG);
}
