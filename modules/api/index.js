const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const prefix = SB_CoreLibrary.prefix().discord;

module.exports = function() {

	const { Signale } = require("signale");

	global.apicon = new Signale({
        disabled: false,
        interactive: false,
        logLevel: 'info',
        scope: 'API',
        stream: process.stdout,
        types: {
            err: {
                label: "General Error",
                color: 'red'
            },
            invalidCommand: {
                label: "Invalid Command",
                color: 'red'
            },
            invalidArgument: {
                label: "Invalid Argument",
                color: 'red'
            },
            succ: {
                label: "Success",
                color: 'green'
            },
            returnValue: {
                label: 'Return Value',
                color: 'yellow'
            },
            seeya: {
                label: "Quitting SeedBot",
                color: 'yellow'
            },
            warmingUp: {
                label: "Warming Up",
                color: 'blueBright'
            },
            info: {
                label: "Info",
                color: 'cyan',
				badge: ''
            },
            apiSent: {
                label: "API Update sent at",
                color: 'yellow'
            },
			debug: {
				label: "Debug",
				color: "magenta"
			}
        }
    });

	if (!SB_Prefrences.api.enable) {
		genericModuleConsole.notLoad("API Module was disabled from `prefrences.json`");
	} else {
		switch (SB_Prefrences.api.network.protocol.type) {
			case "http":
			case "https":
				break;
			default:
				termcon.err("API Protocol Type is not supported.");
				return;
				break;
		}


		SB_Client.on('ready',async () => {
			/*if (message.author.bot) return;
			if (message.content.indexOf(prefix) !== 0) return;
			var args = message.content.slice(prefix.length).trim().split( / +/g);*/

			require("./function.js").goOnline();

			var pk = require("./function.js")
			setInterval(function() {
				pk.sendRequest("userCount", SB_CoreLibrary.userCount())
				pk.sendRequest("guildCount", SB_CoreLibrary.guildCount())
				pk.sendRequest("channelCount", SB_CoreLibrary.channelCount())
				pk.sendRequest("botVersion", SB_Package.version)
				pk.sendRequest("botBuild", SB_Package.build[0])
				pk.sendRequest("botBuildDate", SB_Package.build[1])
				pk.sendRequest("botBranch", SB_Package.branch)
				pk.sendRequest("botOwnerID", SB_Package.ownerID)
				pk.sendRequest("packageName", SB_Package.name)
				pk.sendRequest("botLicense", SB_Package.license)
				pk.sendRequest("packageDescription", SB_Package.description)
				termcon.apiSent(new Date());
			}, (SB_Prefrences.api.timeout * 1000));

		});

		SB_Client.on('ready', () => {
			genericModuleConsole.loaded("API Updater");
		});
	}
}
