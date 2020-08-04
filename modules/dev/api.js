const package = require("./../../package.json");

module.exports.cmd = function(message, args) {
	if (message.author.id === package.ownerID){
		var request = args.slice(0).join(" ");
		var pk = require("./../api/function.js");
		switch (request) {
			case 'updateAll':
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
			case 'update-userCount':
				apiFUNC.apiReqSend("userCount", SB_Client.users.size);
				break;
			case 'update-guildCount':
				apiFUNC.apiReqSend("guildCount", SB_Client.guilds.size);
				break;
			case 'update-channelCount':
				apiFUNC.apiReqSend("channelCount", SB_Client.channels.size);
				break;
			case 'update-botVersion':
				apiFUNC.apiReqSend("botVersion", package.version);
				break;
			case 'update-botBuild':
				apiFUNC.apiReqSend("botBuild", package.build[0]);
				break;
			case 'update-botBuildDate':
				apiFUNC.apiReqSend("botBuildDate", package.build[1]);
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
