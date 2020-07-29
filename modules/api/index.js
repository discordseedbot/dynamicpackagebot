const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const prefix = SB_CoreLibrary.prefix().discord;

module.exports = function() {

	if (!SB_Prefrences.api.enable) {
		genericModuleConsole.notLoad("API Module was disabled from `prefrences.json`");
	} else {
		switch (SB_Prefrences.api.network.protocol.type) {
			case "http":
			case "https":
				break;
			default:
				termcon.err("API Protocol Type is not supported.");
				break;
		}


		SB_Client.on('message',async message => {
			if (message.author.bot) return;
			if (message.content.indexOf(prefix) !== 0) return;
			var args = message.content.slice(prefix.length).trim().split( / +/g);

			require("./function.js").online();

			setInterval(function() {
				let phunk = require("./function.js")
				phunk.apiReqSend("userCount", SB_CoreLibrary.userCount())
				phunk.apiReqSend("guildCount", SB_CoreLibrary.guildCount())
				phunk.apiReqSend("channelCount", SB_CoreLibrary.channelCount())
				phunk.apiReqSend("botVersion", SB_Package.version)
				phunk.apiReqSend("botBuild", SB_Package.build[0])
				phunk.apiReqSend("botBuildDate", SB_Package.build[1])
				phunk.apiReqSend("botBranch", SB_Package.branch)
				phunk.apiReqSend("botOwnerID", SB_Package.ownerID)
				phunk.apiReqSend("packageName", SB_Package.name)
				phunk.apiReqSend("botLicense", SB_Package.license)
				phunk.apiReqSend("packageDescription", SB_Package.description)
				require('./../functions/console.js').apiSent();
			}, 60000);

		});

		SB_Client.on('ready', () => {
			genericModuleConsole.loaded("API Updater");
		});
	}
}
