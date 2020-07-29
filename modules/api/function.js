function validProtocolType() {
	switch (pref.api.network.protocol.type) {
		case "https":
			return require("https");
			break;
		case "http":
			return require("http");
			break;
		default:
			return true;
			break;
	}
}
const pfx = validProtocolType();

var base = `${SB_Prefrences.api.protocol.type}://${SB_Prefrences.api.address}`

module.exports.checkConnection = function() {
	https.get(curlRequest + "connectionTest", (res) => {
		res.on('data', (d) => {
			if (d === 'true') {
					require('./../functions/console.js').info("Connection Established to API Server.");
			} else {
					require('./../functions/console.js').fatal("Connection failed to API Server, some commands may not work. Disable the API in modules/config.json");
			}
		})
	})
}

module.exports.apiReqSend = async function(type, data) {
	var result;
	var url = `${token.apiURL()}?token=${token.apiToken()}&req=${type}&data=${data}`;

	https.get(url)
}


module.exports.offlineAPIRequest = function() {
	console.log("Sending Offline Message to API Server")
	var result;
	var url = `${token.apiURL()}?token=${token.apiToken()}&req=isOnline&data=offline`;

	https.get(url, (res) => {
		console.log("Sent Offline Message to API Server");
	});
}
module.exports.online = function() {
	var result;
	var url = `${token.apiURL()}?token=${token.apiToken()}&req=isOnline&data=online`;

	https.get(url, (res) => {})
}
module.exports.offline = function SendOfflineStuff(){
	if (token.apiToken() !== "seedbot-api-token"){
		require("./function.js").offlineAPIRequest();
		setTimeout(process.exit(), 20000);
	} else {
		process.exit();
	}
}

async function sendRequest(r,d) {
	if (!pfx) {
		let url = `${base}?req=${r}&data=${d}&token=${SB_Token.api}`;
		pfx.get(url, async (res) => {
			res.on('data', (d) => {
				return `${d}`;
			})
		})
	}

}
async function getRequest(request) {

}


module.exports.goOnline = async function() {

}
module.exports.goOffline = async function() {

}
