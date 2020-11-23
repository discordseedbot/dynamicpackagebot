const Discord = require("discord.js");
const package = require('./../../package.json');
const prefix = SB.prefrences.prefix.dev;
const devAlert = require("./alert_handle.js");
const signale = require("signale");

module.exports = function() {
	SB.client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);
		const command = args.shift().toLowerCase();
		if (package.ownerID.indexOf(message.author.id) > -1){
			try {
				let sendNotif = true;
				switch (command) {
					case 'api':
						if (SB.token.api !== "seedbot-api-token") {
							require('./api.js').cmd(message, args);
						} else {
							message.reply("API Token has not been changed, not executing.");
						}
						break;
					case 'channelsend':
						require('./channelsend.js').cmd(message, args);
						break;
					case 'createinvitefromid':
						require('./createinvitefromid.js').cmd(message, args);
						break;
					case 'getallserverinvite':
						require('./getallserverinvite.js').cmd(message);
						break;
					case 'eval':
						require('./eval.js').cmd(message, args);
						break;
					case 'getip':
						require('./getip.js').cmd(message, args);
						break;
					case 'rpc':
						require('./rpc.js').cmd(message, args);
						break;
					case 'shell':
						require('./shell.js').cmd(message, args);
						break;
					case 'role_list':
						require('./role.js').list(message);
						break;
					case 'role_create':
						require('./role.js').create(message,args);
						break;
					case 'role_give':
						require('./role.js').give(message,args);
						break;
					case 'stats':
						require('./stats.js').work(message,args);
						break;
					case 'spam':
						require('./spam.js').cmd(message,args);
						break;
					case 'pin':
						require("./pin.js").cmd(message,args);
						break;
					case 'mute':
						require('./hear.js').mute(message,args);
						break;
					case 'defan':
						require('./hear.js').defan(message);
						break;
					//case 'disconnect':
					//	require('./voice_chat.js').disconnect(message,SB_Client,args,command);
					//	break;
					case 'kick':
						require("./mod.js").kick(message,args)
						break;
					case 'ban':
						require("./mod.js").ban(message,args)
						break;
					case 'purge':
						require("./mod.js").purge(message,args)
						break;
					default:
						sendNotif = false;
						break;
				}
				if (!sendNotif) return;

				SB.modules.libraries.forEach(async (m) => {
					if (m.name === "developer_alerts") {
						var tmpNotifContent = new Discord.MessageEmbed()
							.setColor(Math.floor(Math.random()*16777215).toString(16))
							.setTitle("Developer Used a Command")
							.addField("Command Executed","```"+message.content+"```")
							.addField("Message Info",`***Author's User Snowflake:*** ${message.author.id}\n***Author:*** <@${message.author.id}>\n***Guild Snowflake:*** ${message.guild.id}\n***Guild Name:*** ${message.guild.name}\n***Channel Name:*** ${message.channel.name}\n***Channel Snowflake:*** ${message.channel.id}`)
							.setTimestamp();
						let tmpRequire = require(`./../../${m.location}/${m.main}`).developerNotif(tmpNotifContent);
					}
				})
			} catch (err) {
				SB.modules.libraries.forEach(async (m) => {
					if (m.name === "developer_alerts") {
						let tmpRequire = require(`./../../${m.location}/${m.main}`).developerError(message,err);
					}
				})
				console.log("\n\n")
				console.error(err)
			}
		} else {
			devAlert.developerUnauthAccess(message);
		}
	})

	SB.client.on('ready', () => {
		SB.con.module.bot.loaded("Developer Utilities");
	})
}
