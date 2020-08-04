const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports = function() {
	SB_Client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);
		const command = args.shift().toLowerCase();

		try {
			switch (command) {
				case 'kick':
					require('./kick.js').cmd(message,args);
					break;
				case 'ban':
					require('./ban.js').cmd(message,args);
					break;
				case 'purge':
					require('./purge.js').cmd(message,args);
					break;
			}
		} catch(err) {
			SB_Libraries.forEach(async (m) => {
				if (m.name === "developer_alerts") {
					let tmpRequire = require(`./../../${m.location}/${m.main}`).userspaceError(message, err);
				}
			})
		}
	})

	SB_Client.on('ready', () => {
		botModuleConsole.loaded("Moderation");
	})
}
