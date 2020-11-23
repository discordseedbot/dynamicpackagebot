const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.reply = function(type,userid) {

	var notConError = new Discord.MessageEmbed()
		.setColor('#ff0000')
		.setTimestamp()
		.setDescription("<@"+userid+"> is not conencted to Voice Channel, Unable to execute Command.");


	var defanTrue = new Discord.MessageEmbed()
		.setColor(SB.core.misc_randHex())
		.setTimestamp()
		.setDescription("<@"+userid+"> is now deaf");


	var defanFalse = new Discord.MessageEmbed()
		.setColor(SB.core.misc_randHex())
		.setTimestamp()
		.setDescription("<@"+userid+"> can now hear");

	var muteTrue = new Discord.MessageEmbed()
		.setColor(SB.core.misc_randHex())
		.setTimestamp()
		.setDescription("<@"+userid+"> is now muted");


	var muteFalse = new Discord.MessageEmbed()
		.setColor(SB.core.misc_randHex())
		.setTimestamp()
		.setDescription("<@"+userid+"> can now speak");


	var disconnectMSG = new Discord.MessageEmbed()
		.setColor(SB.core.misc_randHex())
		.setTimestamp()
		.setDescription("<@"+userid+"> has been disconnected from Voice Channel");


	var generalError = new Discord.MessageEmbed()
		.setColor('#ff0000')
		.setTimestamp()
		.setDescription("Error:\nCan the owner of this bot check console log <3\nIt's either than you did something wrong.");

	var invalidSetting = new Discord.MessageEmbed()
		.setColor('#ff0000')
		.setTimestamp()
		.setDescription("Invalid Setting, Try reading the code in `modules/dev/voice_chat.js` or read the commands list (https://seedbot.xyz?commands#dev)");

	var boolNotSet = new Discord.MessageEmbed()
		.setColor('#ff0000')
		.setTimestamp()
		.setDescription("Boolean Not set. Have you looked at the commands page? (https://seedbot.xyz?commands#dev)");

	switch (type){
		case "notCon":
			return notConError;
			break;
		case "defanTrue":
			return defanTrue;
			break;
		case "defanFalse":
			return defanFalse;
			break;
		case "muteTrue":
			return muteTrue;
			break;
		case "muteFalse":
			return muteFalse;
			break;
		case "diconnect":
			return disconnectMSG;
			break;
		case "generalError":
			return generalError;
			break;
		case "invalidSetting":
			return invalidSetting;
			break;
		case "boolNotSet":
			return boolNotSet;
			break;
		default:
			return generalError;
			break;
	}
}
