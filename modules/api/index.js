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

	const API = require("./function.js");

	if (!SB_Prefrences.api.enable) {
		genericModuleConsole.notLoad("API Module was disabled from `prefrences.json`");
	} else {
		//		Determine the protocol that is going to be used
		switch (SB_Prefrences.api.network.protocol.type) {
			case "http":
			case "https":
				break;
			default:
				termcon.err("API Protocol Type is not supported.");
				return;
				break;
		}

		//		Check connection to selected API Server
		API.checkConnection()

		SB_Client.on('ready',async () => {
			/*if (message.author.bot) return;
			if (message.content.indexOf(prefix) !== 0) return;
			var args = message.content.slice(prefix.length).trim().split( / +/g);*/

			API.goOnline();
			setInterval(function() {
				API.sendRequest("userCount", SB_CoreLibrary.userCount())
				API.sendRequest("guildCount", SB_CoreLibrary.guildCount())
				API.sendRequest("channelCount", SB_CoreLibrary.channelCount())
				API.sendRequest("botVersion", SB_Package.version)
				API.sendRequest("botBuild", SB_Package.build.number)
				API.sendRequest("botBuildDate", SB_Package.build.date)
				API.sendRequest("botBranch", SB_Package.branch)
				API.sendRequest("botOwnerID", SB_Package.ownerID)
				API.sendRequest("packageName", SB_Package.name)
				API.sendRequest("botLicense", SB_Package.license)
				API.sendRequest("packageDescription", SB_Package.description)
				termcon.apiSent(new Date());
			}, (SB_Prefrences.api.timeout * 1000));

		});

		SB_Client.on('ready', () => {
			genericModuleConsole.loaded("API Updater");
		});
	}
}
