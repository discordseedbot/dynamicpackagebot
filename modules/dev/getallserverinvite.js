const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const fs = require('fs');
const package = require('./../../package.json');

module.exports.cmd = function(message) {
	if (message.author.id === package.ownerID){
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
					console.log(msgcount)
					if (msgcount <= 1){
						let embed = new Discord.RichEmbed()
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
									 console.log(err);
									 let errorEmbed = new Discord.RichEmbed()
									 	.setTitle("`"+message.content+"`")
									 message.channel.send("An error as occoured, Please check the console log.");
								}
								const attachment = new MessageAttachment('./' + filename);
								message.channel.send("Server List cannot fit in less than two messages, but here is an attachment!", attachment)
							});

						}
					}

				}
			}).catch(err => { ct++; });
		});
	} else {
		message.reply("This command can only be used by a developer.");
	}
}
