const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const prefix = require("./../../prefix.json").dev;
const package = require('./../../package.json');

module.exports.cmd = function(message, client, args) {
	var game = args.slice(0).join(" ");
	if (message.author.id === package.ownerID) {
		if (game.length > 1){
			if (game === 'refresh') {
				client.user.setActivity(`you - seedbot.xyz`, { type: 'WATCHING'});
				message.channel.send("***Rich Presence has been Refreshed***")
			} else {
				client.user.setActivity(`${game} - seedbot.xyz`, { type: 'WATCHING'});
				message.channel.send('***Rich Presence has been updated to:*** \n' + "`" + game + "`");
			}
		} else {
			message.reply("No Arguments specified.")
		}
	}else{
		message.reply('You do not have permissions to use this developer command.');
	}
}
