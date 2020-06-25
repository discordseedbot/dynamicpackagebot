const package = require("./../../package.json");

module.exports.cmd = function(message, args) {
	if (message.author.id === package.ownerID){
		var request = args.slice(0).join(" ");
		var apiFUNC = require("./../api/function.js");
		switch (request) {
			case 'updateAll':
				message.channel.send("Force Updated All API Fields");
				apiFUNC.apiReqSend("userCount", SB_Client.users.size);
				apiFUNC.apiReqSend("guildCount", SB_Client.guilds.size);
				apiFUNC.apiReqSend("channelCount", SB_Client.channels.size);
				apiFUNC.apiReqSend("botVersion", package.version);
				apiFUNC.apiReqSend("botBuild", package.build[0]);
				apiFUNC.apiReqSend("botBuildDate", package.build[1]);
				apiFUNC.apiReqSend("botBranch", package.branch);
				apiFUNC.apiReqSend("botOwnerID", package.ownerID);
				apiFUNC.apiReqSend("packageName", package.name);
				apiFUNC.apiReqSend("botLicense", package.license);
				apiFUNC.apiReqSend("packageDescription", package.description);
				require('./../functions/console.js').apiSent();
				break;
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
