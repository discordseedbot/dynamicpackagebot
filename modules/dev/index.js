const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const package = require('./../../package.json');
const prefix = require("./../../prefix.json").dev;
const devAlert = require("./alert_handle.js");
const signale = require("signale");

module.exports = function(client,token,libraw) {
	client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);
		const command = args.shift().toLowerCase();
			if (token.owners().indexOf(message.author.id) > -1){
				try {
					let sendNotif = true;
					switch (command) {
						case 'api':
							if (token.api !== "seedbot-api-token") {
								require('./api.js').cmd(message, client, args);
							} else {
								message.reply("API Token has not been changed, not executing.");
							}
							break;
						case 'channelsend':
							require('./channelsend.js').cmd(message, client, args);
							break;
						case 'createinvitefromid':
							require('./createinvitefromid.js').cmd(message, client, args);
							break;
						case 'getallserverinvite':
							require('./getallserverinvite.js').cmd(message, client, prefix, command);
							break;
						case 'eval':
							require('./eval.js').cmd(message, args, client);
							break;
						case 'getip':
							require('./getip.js').cmd(message, args);
							break;
						case 'rpc':
							require('./rpc.js').cmd(message, client, args);
							break;
						case 'shell':
							require('./shell.js').cmd(message, args);
							break;
						case 'role_list':
							require('./role.js').list(message);
							break;
						case 'role_create':
							require('./role.js').create(message,client,args);
							break;
						case 'role_give':
							require('./role.js').give(message,client,args);
							break;
						case 'stats':
							require('./stats.js').work(message,client,args);
							break;
						case 'spam':
							require('./spam.js').cmd(message,args);
							break;
						case 'pin':
							require("./pin.js").cmd(message,args);
							break;
						case 'mute':
							require('./hear.js').mute(message,client,args,command);
							break;
						case 'defan':
							require('./hear.js').defan(message,client,args,command);
							break;
						//case 'disconnect':
						//	require('./voice_chat.js').disconnect(message,client,args,command);
						//	break;
						case 'kick':
							require("./mod.js").kick(message,client,args)
							break;
						case 'ban':
							require("./mod.js").ban(message,client,args)
							break;
						case 'purge':
							require("./mod.js").purge(message,client,args)
							break;
						default:
							sendNotif = false;
							break;
					}
					if (!sendNotif) return;
					var tmpNotifContent = new Discord.RichEmbed()
						.setColor(require("./../functions/main.js").randomhexcolor())
						.setTitle("Developer Used a Command")
						.addField("Command Executed","```"+message.content+"```")
						.addField("Message Info",`***Author's User Snowflake:*** ${message.author.id}\n***Author:*** <@${message.author.id}>\n***Guild Snowflake:*** ${message.guild.id}\n***Guild Name:*** ${message.guild.name}\n***Channel Name:*** ${message.channel.name}\n***Channel Snowflake:*** ${message.channel.id}`)
						.setTimestamp();
					devAlert.developerNotifCustom(client,tmpNotifContent);
				} catch (err) {
					devAlert.developerError(client,message,err);
					console.log("\n\n\n\n")
					console.error(err)
				}
			} else {
				devAlert.developerUnauthAccess(client,token,libraw);
			}
	})

	client.on('ready', () => {
		signale.info("[BotModule] Developer Commands and Utilities");
	})


	client.login(token.discord());
}
