const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const fs = require('fs');
const package = require('./../../package.json');

module.exports.cmd = function(message) {
	message.channel.send("This might take a bit, sorry!")
	var invites = ["I am required else it won't work"], ct = 0;
	SB_Client.guilds.forEach(g => {
		g.fetchInvites().then(guildInvites => {
			invites[invites.length + 1] = (g + " - `Invites: " + guildInvites.array().join(", ") + "`");
			ct++;

			if(ct >= SB_Client.guilds.size) {
				for(let i = 0; i < invites.length; i++) {
					if(invites[i] == undefined) invites.splice(i, 1);
				}
				invites.shift();

				for(let i = 0; i < invites.length; i++) invites[i] = "- " + invites[i];
				invites = invites.join("\n\n");
				let invitelength = invites.length;
				let msgcount = invites.length / 2048;
				if (msgcount <= 1){
					let embed = new Discord.MessageEmbed()
						.setTitle("All Invites:")
						.setDescription(invites);
					message.channel.send(embed);
				} else {
					if (msgcount <= 2) {
						message.channel.send(invites.substr(0,2047));
						message.channel.send(invites.substr(2048,invitelength))
					} else {
						var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
						var retVal = "";
						for (var i = 0, n = charset.length; i < length; ++i) {
							retVal += charset.charAt(Math.floor(Math.random() * n));
						}
						let filename = 'getallserverinvite-tmp-'+retVal+'.txt';

						fs.writeFile(filename, invites, function (err) {
							if (err) {
								SB_Libraries.forEach(async (m) => {
									if (m.name === "developer_alerts") {
										let tmpRequire = require(`./../../${m.location}/${m.main}`).developerError(message,err);
									}
								})
							}
							const attachment = new MessageAttachment('./' + filename);
							message.channel.send("Server List cannot fit in less than two messages, but here is an attachment!", attachment)
						});

					}
				}

			}
		}).catch(err => { ct++; });
	});
}
