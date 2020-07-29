const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const prefix = SB_CoreLibrary.prefix().default;
const signale = require("signale");

module.exports = function() {
	SB_Client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);
		const command = args.shift().toLowerCase();

		try {
			switch (command) {
				case 'help':
					require('./help.js').cmd(message);
					break;
				case 'invite':
					require('./invite.js').cmd(message);
					break;
				case 'ping':
					require('./ping.js').cmd(message);
					break;
				case 'patreon':
					require('./patreon.js').cmd(message);
					break;
				case 'support':
					require('./support.js').cmd(message);
					break;
				case 'roadmap':
					require('./roadmap.js').cmd(message);
					break;
				case 'guide':
					require('./guide.js').cmd(message);
					break;
				case 'avatar':
					require('./avatar.js').cmd(message);
					break;
				case 'info':
					require('./info.js').cmd(message);
					break;
				case 'github':
					require('./contrib.js').github(message);
					break;
			}
		} catch(err) {
			SB_Libraries.forEach(async (m) => {
				if (m.name === "developer_alerts") {
					let tmpRequire = require(`./../../${m.location}/${m.main}`).userspaceError(message,err);
				}
			})
		}
	})

	SB_Client.on('ready', () => {
		botModuleConsole.loaded("Basic")
	})
}
