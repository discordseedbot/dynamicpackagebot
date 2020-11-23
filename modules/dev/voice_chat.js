const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

const toolbox = require("./toolbox.js");

// Extremely Useful Documentation;
//	https://discord.js.org/#/docs/main/v12/class/GuildMember
//  https://discord.js.org/#/docs/main/v12/class/GuildMember?scrollTo=setDeaf
//  https://discord.js.org/#/docs/main/v12/class/GuildMember?scrollTo=setMute
// https://discord.js.org/#/docs/main/v12/class/GuildMember?scrollTo=setChannel

// To make my life easier lmao




module.exports.hear = function(message,args,command) {
	var status = args[0];
	let curGuild = SB.client.guilds.cache.get(message.guild.id).id;
	let usrMention = message.mentions.members.first();

		//To make our life easier for the future.
	let userID = usrMention.id;

	if (status==="true"){status=true;}
	if (status==="false"){status=false;}
	if (status!==true||status!==false){
		message.channel.send(toolbox.reply("boolNotSet",userID));
	}

	if (message.member.voice.channel === undefined) {
		// User is not connected to a Voice Channel.
		message.channel.send(toolbox.reply("notCon",userID));
	} else {
		switch (command) {
			case "defan":
					// Defan User
				message.guild.member(userid).setDeaf(status);
				if (status) {
					message.channel.send(toolbox.reply("defanTrue",message.member.id));
				} else {
					message.channel.send(toolbox.reply("defanFalse",message.member.id));
				}
				break;
			case "mute":
				// Mute user
					message.guild.member(userid).setMute(status);
				if (status) {
					message.channel.send(toolbox.reply("muteTrue",message.member.id));
				} else {
					message.channel.send(toolbox.reply("muteFalse",message.member.id));
				}
				break;
			default:
				message.channel.send(toolbox.reply("invalidSetting",userID));
				return false;
				break;
		}
	}
}

module.exports.disconnect = function(message) {
	let curGuild = SB.client.guilds.cache.get(message.guild.id).id;
	let usrmention = message.mentions.members.first();

		//To make our life easier for the future.
	let userid = usrmention.id;

		// Sets user to no channelID so they get disconnected

	if(message.member.voice.channel === undefined) {
		// User is not connected to voice channel
		message.channel.send(require("./voice_chat.js").reply("notCon",userid));
	} else {
			message.guild.member(userid).voice.setChannel();
			message.channel.send(require("./voice_chat.js").reply(disconnect,userid));
	}

}
