const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const prefix = require("./../../prefix.json").default;
const signale = require("signale");

module.exports = function() {
	SB_Client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);
		const command = args.shift().toLowerCase();

		try {
			var lib;
			libr.forEach(async (g) => {
				if (g.name === "core") {
					lib = require(`./../../${g.location}/${g.main}`);
				}
			})
			switch (command) {
				case 'help':
					require('./help.js').cmd(message,lib);
					break;
				case 'invite':
					require('./invite.js').cmd(message,lib);
					break;
				case 'ping':
					require('./ping.js').cmd(message,lib);
					break;
				case 'patreon':
					require('./patreon.js').cmd(message,lib);
					break;
				case 'support':
					require('./support.js').cmd(message,lib);
					break;
				case 'roadmap':
					require('./roadmap.js').cmd(message,lib);
					break;
				case 'guide':
					require('./guide.js').cmd(message,lib);
					break;
				case 'avatar':
					require('./avatar.js').cmd(message,lib);
					break;
				case 'info':
					require('./info.js').cmd(message,lib);
					break;
			}
		} catch(err) {
			//require("./../functions/developer_alert_handle.js").userspaceError(SB_Client,message,err);
			console.error(err)
		}
	})

	SB_Client.on('ready', () => {
		botModuleConsole.loaded("Basic")
	})


	SB_Client.login(SB_Token.discord());
}
