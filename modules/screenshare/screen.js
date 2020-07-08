const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const SB_Client = new Discord.Client();
const prefix = SB_CoreLibrary.prefix().default;

module.exports.cmd = function(message) {
	if (message.member.voice.channel === undefined) { message.reply("Plesae Join a Voice Channel.") } else {;
		var currentGuildID = message.guild.id;
		var.voice.channelID = message.member.voice.channel.id;
		var screensharelink = "https://discordapp.com/channels/"+currentGuildID+"/".voice.channelID;
		var response = new Discord.RichEmbed()
			.setColor(require("./../functions/main.js").randomhexcolor())
			.setTitle("Voice Chat Screen Share")
			.setDescription("To screenshare in your current voice chat channel then [click here]("+screensharelink+")")
		message.channel.send(response)
	}
}
