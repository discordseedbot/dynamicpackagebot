const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const SB_Client = new Discord.Client();
const prefix = SB_CoreLibrary.prefix().default;

module.exports.cmd = function(message) {
	if (message.member.voiceChannel === undefined) { message.reply("Plesae Join a Voice Channel.") } else {;
		var currentGuildID = message.guild.id;
		var voiceChannelID = message.member.voiceChannel.id;
		var screensharelink = "https://discordapp.com/channels/"+currentGuildID+"/"+voiceChannelID;
		var response = new Discord.RichEmbed()
			.setColor(require("./../functions/main.js").randomhexcolor())
			.setTitle("Voice Chat Screen Share")
			.setDescription("To screenshare in your current voice chat channel then [click here]("+screensharelink+")")
		message.channel.send(response)
	}
}
