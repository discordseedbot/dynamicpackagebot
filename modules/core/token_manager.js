var tokenJSON = require("./../../token.json");


module.exports.ck = function(tokenToGet) {
	var errorRet = {
		"discordNotSet": "Discord Token is not set for Heroku or the name is invalid, the name must be 'DISCORD' for the enviroment varaible.",
		"ytNotSet": "Youtube Token is not set for Heroku or the env name is invalid, the name must be 'YOUTUBE' for the enviroment varaible."
	};
	if (process.env._.indexOf("heroku") !== -1){
		// Running on Heroku
		process.env

		if (!process.env.DISCORD){console.error(errorRet.discordNotSet);process.exit(1)};

		switch (tokenToGet) {
			case "discord":
				return process.env.DISCORD;
				break;
			case "youtube":
				return process.env.YOUTUBE;
				break;
			case "apiToken":
				if (!process.env.APIKEY) return "seedbot-api-token";
				return process.env.APIKEY;
				break;
			case "apiURL":
				if (!process.env.APIURL) return "seedbot-api-url";
				return process.env.APIURL;
				break;
			default:
				console.error("Internal Error");
				process.exit(1);
				break;
		}
	} else {
		switch (tokenToGet) {
			case "discord":
				return tokenJSON.discord;
				break;
			case "youtube":
				return tokenJSON.youtube;
				break;
			case "apiToken":
				return tokenJSON.apiToken;
				break;
			case "apiURL":
				return tokenJSON.apiURL;
				break;
			default:
				console.error("Internal Error");
				process.exit(1);
				break;
		}
	}
}

module.exports.discord = function() {
	return require("./tokenman.js").ck("discord");
}
module.exports.youtube = function() {
	return require("./tokenman.js").ck("youtube");
}
module.exports.apiToken = function() {
	return require("./tokenman.js").ck("apiToken");
}
module.exports.apiURL = function() {
	return require("./tokenman.js").ck("apiURL");
}
