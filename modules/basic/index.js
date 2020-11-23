const Discord = require("discord.js");
const prefix = SB.prefix.default;
var response = require("./response.json")

module.exports = function() {
	SB.client.on('message',async message => {
		if (message.author.bot) return;
		if (message.content.indexOf(prefix) !== 0) return;
		var args = message.content.slice(prefix.length).trim().split( / +/g);
		const command = args.shift().toLowerCase();

		try {
			switch (command.toLowerCase()) {
				case "guide":
				case "help":
				case "invite":
				case "roadmap":
				case "support":
					let evalEmbed = new Discord.MessageEmbed()
						.setColor(SB.core.misc_randHex())
						.setTitle(eval(`response.${command.toLowerCase()}.title`))
						.setDescription(eval(`response.${command.toLowerCase()}.desc`))
						.setTimestamp()
					message.channel.send(evalEmbed);
					break;
				case 'ping':
					require('./ping.js').cmd(message);
					break;
				case 'avatar':
					require('./avatar.js').cmd(message);
					break;
				case 'info':
					require('./info.js').cmd(message);
					break;
				case 'contributors':
					require("./contrib.js").contributors(message);
					break;
			}
		} catch(err) {
			SB.modules.libraries.forEach(async (m) => {
				if (m.name === "developer_alerts") {
					let tmpRequire = require(`./../../${m.location}/${m.main}`).userspaceError(message,err);
				}
			})
		}
	})

	SB.client.on('ready', () => {
		SB.con.module.bot.loaded("Basic")
	})
}
