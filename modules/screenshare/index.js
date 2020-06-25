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
			switch (command) {
				case 'screenshare':
					require("./screen.js").cmd(message)
					break;
			}
		} catch(err){
			//require("./../functions/developer_alert_handle.js").userspaceError(SB_Client,message,err);
			console.error(err);
		}
	})

	SB_Client.on('ready', () => {
		signale.info("[BotModule] Loaded Screenshare");
	})


	SB_Client.login(SB_Token.discord());
}
