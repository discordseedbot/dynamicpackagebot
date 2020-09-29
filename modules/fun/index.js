const Discord = require("discord.js");
const prefix = SB.prefrences.prefix.default;

module.exports = function() {
	SB.client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);
		const command = args.shift().toLowerCase();

		try {
			switch (command) {
				case 'asciify':
					require('./asciify.js').cmd(message, args);
					break;
				case 'punch':
					require('./punch.js').cmd(message, args);
					break;
				case 'rps':
					require('./rockpaper.js').cmd(message, args);
					break;
				case 'magic8ball':
					require('./magic8ball/main.js').cmd(message);
					break;
				case 'copypasta':
					require('./copypasta/main.js').cmd(message);
					break;
			}
		} catch (err) {
			SB.modules.libraries.forEach(async (m) => {
				if (m.name === "developer_alerts") {
					let tmpRequire = require(`./../../${m.location}/${m.main}`).userspaceError(message,err);
				}
			})
		}
	})

	SB.client.on('ready', () => {
		SB.con.module.bot.loaded("Fun");
	})
}
