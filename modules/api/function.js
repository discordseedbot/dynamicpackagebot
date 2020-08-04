function validProtocolType() {
	switch (SB_Prefrences.api.network.protocol.type) {
		case "https":
			if (SB_Debug) apicon.debug(`Protocol Type Detected as "${SB_Prefrences.api.network.protocol.type}"`);
			return require("https");
			break;
		case "http":
			if (SB_Debug) apicon.debug(`Protocol Type Detected as "${SB_Prefrences.api.network.protocol.type}"`);
			return require("http");
			break;
		default:
			return undefined;
			break;
	}
}
const pfx = validProtocolType();

var base;
//if (SB_Debug) apicon.debug(``);
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
if (SB_Debug) {apicon.debug(`Base Request Set to [${base}]`)};

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
module.exports.sendRequest = function (r,d) {
	if (pfx !== undefined) {
		pfx.get(`${base}?req=${r}&data=${d}&token=${SB_Token.apiToken()}`,  (res) => {
			if (SB_Debug) {apicon.debug(`Request [${r}] with the data of [${d}]`)};
			return "poo poo";
		})
	}

}
module.exports.getRequest = async function (r) {
	if (pfx !== undefined) {
		let url = `${base}?req=${r}`;
		pfx.get(url, async (res) => {
			res.on('data', (d) => {
				return `${d}`;
			})
		})
	}
}


module.exports.goOnline = async function() {
	if (pfx !== undefined) {
		if (SB_Debug) apicon.debug(`"goOnline" packet sent.`);
		pfx.get(`${base}?token=${SB_Token.apiToken()}&req=isOnline&data=online`);
	}
}
module.exports.goOffline = async function() {
	if (token.apiToken() !== "seedbot-api-token"){
		if (pfx !== undefined) {
			let url = `${base}?req=isOnline&data=offline&token=${SB_Token.apiToken()}`
			pfx.get(url, async (res) => {
				res.on('data', (d) => {
					if (SB_Debug) apicon.debug(`"goOffline" packet sent.`);
					setTimeout(process.exit(),300);
				})
			})
		}
	} else {
		process.exit();
	}
}
