const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const prefix = SB_CoreLibrary.prefix().dev;

module.exports.cmd = function(message,args) {
	var game = args.slice(0).join(" ");
		if (game.length > 1){
			switch (game) {
				case "refresh":
				case "reset":
					SB_Client.user.setActivity(`you - seedbot.xyz`, { type: 'WATCHING'});
					message.channel.send("***Rich Presence has been Refreshed***")
					break;
				case "clear":
					SB_Client.user.setActivity(null);
					message.channel.send("Rich Presence has been set to `null` (nothing)")
					break;
				default:
					SB_Client.user.setActivity(`${game} - seedbot.xyz`, { type: 'WATCHING'});
					message.channel.send('***Rich Presence has been updated to:*** \n' + "`" + game + "`");
					break;
			}
		} else {
			message.reply("No Arguments Given, Check Documentation")
		}
}
