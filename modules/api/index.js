const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = function() {

	const { Signale } = require("signale");

	global.SB.con.api = new Signale({
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

	if (!SB.prefrences.api.enable) {
		SB.con.module.notLoad("API Module was disabled from `prefrences.json`");
	} else {
		//		Determine the protocol that is going to be used
		switch (SB.prefrences.api.network.protocol.type) {
			case "http":
			case "https":
				break;
			default:
				SB.con.api.err("API Protocol Type is not supported.");
				return;
				break;
		}

		//		Check connection to selected API Server
		API.checkConnection()

		SB.client.on('ready',async () => {

			API.goOnline();
			setInterval(function() {
				API.sendRequest("userCount", SB.core.userCount())
				API.sendRequest("guildCount", SB.core.guildCount())
				API.sendRequest("channelCount", SB.core.channelCount())
				API.sendRequest("botVersion", SB.package.version)
				API.sendRequest("botBuild", SB.package.build.number)
				API.sendRequest("botBuildDate", SB.package.build.date)
				API.sendRequest("botBranch", SB.package.branch)
				API.sendRequest("botOwnerID", SB.package.ownerID)
				API.sendRequest("packageName", SB.package.name)
				API.sendRequest("botLicense", SB.package.license)
				API.sendRequest("packageDescription", SB.package.description)
				SB.con.api.apiSent(new Date());
			}, (SB.prefrences.api.timeout * 1000));

		});

		SB.client.on('ready', () => {
			SB.con.module.loaded("API Updater");
		});
	}
}
