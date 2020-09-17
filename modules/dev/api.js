const package = require("./../../package.json");

module.exports.cmd = function(message, args) {
	if (message.author.id === package.ownerID){
		var request = args.slice(0).join(" ");
		var pk = require("./../api/function.js");
		switch (request) {
			case 'updateAll':
				pk.sendRequest("userCount", SB.core.userCount())
				pk.sendRequest("guildCount", SB.core.guildCount())
				pk.sendRequest("channelCount", SB.core.channelCount())
				pk.sendRequest("botVersion", SB.package.version)
				pk.sendRequest("botBuild", SB.package.build.number)
				pk.sendRequest("botBuildDate", SB.package.build.date)
				pk.sendRequest("botBranch", SB.package.branch)
				pk.sendRequest("botOwnerID", SB.package.ownerID)
				pk.sendRequest("packageName", SB.package.name)
				pk.sendRequest("botLicense", SB.package.license)
				pk.sendRequest("packageDescription", SB.package.description)
				termcon.apiSent(new Date());
			case 'update-userCount':
				apiFUNC.apiReqSend("userCount", SB.client.users.size);
				break;
			case 'update-guildCount':
				apiFUNC.apiReqSend("guildCount", SB.client.guilds.size);
				break;
			case 'update-channelCount':
				apiFUNC.apiReqSend("channelCount", SB.client.channels.size);
				break;
			case 'update-botVersion':
				apiFUNC.apiReqSend("botVersion", package.version);
				break;
			case 'update-botBuild':
				apiFUNC.apiReqSend("botBuild", package.build.number);
				break;
			case 'update-botBuildDate':
				apiFUNC.apiReqSend("botBuildDate", package.build.date);
				break;
			case 'update-botBranch':
				apiFUNC.apiReqSend("botBranch", package.branch);
				break;
			case 'update-botOwnerID':
				apiFUNC.apiReqSend("botOwnerID", package.ownerID);
				break;
			case 'update-packageName':
				apiFUNC.apiReqSend("packageName", package.name);
				break;
			case 'update-botLicense':
				apiFUNC.apiReqSend("botLicense", package.license);
				break;
			case 'update-packageDescription':
				apiFUNC.apiReqSend("packageDescription", package.description);
				break;
			default:
				message.channel.send("Request not specifiyed, please check the help page.\n https://seedbot.xyz?commands#dev");
				break;
		}
	}
}
