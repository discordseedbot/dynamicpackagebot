const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const prefix = require("./../../prefix.json").default;

module.exports = function(client,token) {
	client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);
		const command = args.shift().toLowerCase();

		try {
			switch (command) {
				case 'screenshare':
					require("./screen.js").cmd(message)
					break;
			}
		} catch(err){
			//require("./../functions/developer_alert_handle.js").userspaceError(client,message,err);
			console.error(err);
		}
	})

	client.on('ready', () => {
		signale.info("[BotModule] Loaded Screenshare");
	})


	client.login(token.discord());
}
