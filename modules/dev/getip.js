const Discord = require("discord.js");
const package = require('./../../package.json');
const http = require("http")

module.exports.cmd = function(message, args) {

	http.get("http://api.ipify.org", (res) => {
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
            try {
				var type = args.slice(0).join(' ');
				let evalEmbed = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('Get Global IP Address')
					.setAuthor('s~getip')
					.setTimestamp()
					.setDescription('Global IP Address:\n```\n' + rawData + "\n```");
				message.channel.send(evalEmbed);
            } catch (e) {
				SB.modules.libraries.forEach(async (m) => {
					if (m.name === "developer_alerts") {
						let tmpRequire = require(`./../../${m.location}/${m.main}`).developerNotif(tmpNotifContent);
					}
				})
            }
        });
    })

}
