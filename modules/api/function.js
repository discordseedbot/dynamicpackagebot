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

var base;

switch (SB_Prefrences.api.protocol.port) {
	case "auto":
	case "default":
	case "autodetect":
		base = `${SB_Prefrences.api.protocol.type}://${SB_Prefrences.api.address}/`;
		break;
	default:
		if (/^\d+$/.test(SB_Prefrences.api.port)) {
			base = `${SB_Prefrences.api.protocol.type}://${SB_Prefrences.api.address}:${SB_Prefrences.api.port}/`;
		} else {
			base = `${SB_Prefrences.api.protocol.type}://${SB_Prefrences.api.address}/`;
			termcon.err("Invalid Port given for API in `prefrences.json`, Must only contain numbers.");
		}
		break;
}

module.exports.checkConnection = function() {
	pfx.get(`${base}?req=checkConnection`, (res) => {
		res.on('data', (d) => {
			if (d === 'true') {
					require('./../functions/console.js').info("Connection Established to API Server.");
			} else {
					require('./../functions/console.js').fatal("Connection failed to API Server, some commands may not work. Disable the API in modules/config.json");
			}
		})
	})
}
async function sendRequest(r,d) {
	if (!pfx) {
		let url = `${base}?req=${r}&data=${d}&token=${SB_Token.apiToken()}`;
		pfx.get(url, async (res) => {
			res.on('data', (d) => {
				return `${d}`;
			})
		})
	}

}
async function getRequest(r) {
	if (!pfx) {
		let url = `${base}?req=${r}`;
		pfx.get(url, async (res) => {
			res.on('data', (d) => {
				return `${d}`;
			})
		})
	}
}


module.exports.goOnline = async function() {
	var url = `${base}?token=${SB_Token.apiToken()}&req=isOnline&data=online`;

	https.get(url)
}
module.exports.goOffline = async function() {
	if (token.apiToken() !== "seedbot-api-token"){
		if (!pfx) {
			let url = `${base}?req=isOnline&data=offline&token=${SB_Token.apiToken()}`
			pfx.get(url, async (res) => {
				res.on('data', (d) => {
					setTimeout(process.exit(),300);
				})
			})
		}
	} else {
		process.exit();
	}
}
