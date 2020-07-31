function validProtocolType() {
	switch (SB_Prefrences.api.network.protocol.type) {
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

switch (SB_Prefrences.api.network.port) {
	case "auto":
	case "default":
	case "autodetect":
		base = `${SB_Prefrences.api.network.protocol.type}://${SB_Prefrences.api.network.address}/`;
		break;
	default:
		if (/^\d+$/.test(SB_Prefrences.api.network.port)) {
			base = `${SB_Prefrences.api.network.protocol.type}://${SB_Prefrences.api.network.address}:${SB_Prefrences.api.network.port}/`;
		} else {
			base = `${SB_Prefrences.api.network.protocol.type}://${SB_Prefrences.api.network.address}/`;
			termcon.err("Invalid Port given for API in `prefrences.json`, Must only contain numbers.");
		}
		break;
}

console.log(base)

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
module.exports.sendRequest = async function (r,d) {
	if (!pfx) {
		pfx.get(`${base}?req=${r}&data=${d}&token=${SB_Token.apiToken()}`, async (res) => {
			res.on('data', (d) => {
				console.log(`sent [${r}] with the data of [${d}]`);
				return `${d}`;
			})
		})
	}

}
module.exports.getRequest = async function (r) {
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
	https.get(`${base}?token=${SB_Token.apiToken()}&req=isOnline&data=online`);
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
