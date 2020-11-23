function validProtocolType() {
	switch (SB.prefrences.api.network.protocol.type) {
		case "https":
			if (SB.parameters.debugMode) SB.con.api.debug(`Protocol Type Detected as "${SB.prefrences.api.network.protocol.type}"`);
			return require("https");
			break;
		case "http":
			if (SB.parameters.debugMode) SB.con.api.debug(`Protocol Type Detected as "${SB.prefrences.api.network.protocol.type}"`);
			return require("http");
			break;
		default:
			return undefined;
			break;
	}
}
const pfx = validProtocolType();

var base;
switch (SB.prefrences.api.network.port) {
	case "auto":
	case "default":
	case "autodetect":
		if (SB.parameters.debugMode) {SB.con.api.debug("Port is set to [AutoDetect]")}
		base = `${SB.prefrences.api.network.protocol.type}://${SB.prefrences.api.network.address}/`;
		break;
	default:
		if (/^\d+$/.test(SB.prefrences.api.network.port)) {
			if (SB.parameters.debugMode) {SB.con.api.debug(`Port is set to [${SB.prefrences.api.network.port}]`)}
			base = `${SB.prefrences.api.network.protocol.type}://${SB.prefrences.api.network.address}:${SB.prefrences.api.network.port}/`;
		} else {
			if (SB.parameters.debugMode) {apicon.debug("Port is set to [AutoDetect]")}
			base = `${SB.prefrences.api.network.protocol.type}://${SB.prefrences.api.network.address}/`;
			SB.con.api.err("Invalid Port given for API in `prefrences.json`, Must only contain numbers.");
		}
		break;
}
if (SB.parameters.debugMode) {SB.con.api.debug(`Base Request Set to [${base}]`)};

module.exports.checkConnection = async function() {
	pfx.get(`${base}?req=connectionTest`, (res) => {
		var data="";
		res.on('data', (d) => {
			data += d;
		})
		res.on('end',()=>{
			if (data === 'true') {
					SB.con.api.info("Connection Established to API Server.");
			} else {
					SB.con.api.err("Connection failed to API Server, some commands may not work. Disable the API in modules/config.json");
			}
		})
	})
}
module.exports.sendRequest = async function (r,d) {
	if (pfx !== undefined) {
		pfx.get(`${base}?req=${r}&data=${d}&token=${SB.token.api}`,  (res) => {
			if (SB.parameters.debugMode) {SB.con.api.debug(`Request [${r}] with the data of [${d}]`)};
			return "poo poo";
		})
	}

}
module.exports.getRequest = async function (r) {
	if (pfx !== undefined) {
		let url = `${base}?req=${r}`;
		pfx.get(url, async (res) => {
			if (SB.parameters.debugMode) {SB.con.api.debug(`Request [${r}] was sent to the API server.`)};
			res.on('data', (d) => {
				return `${d}`;
			})
		})
	}
}


module.exports.goOnline = async function() {
	if (pfx !== undefined) {
		if (SB.parameters.debugMode) SB.con.api.debug(`"goOnline" packet sent.`);
		require("./function.js").sendRequest("isOnline","online");
	}
}
module.exports.goOffline = async function() {
	if (SB.token.api !== "seedbot-api-token"){
		if (pfx !== undefined) {
			require("./function.js").sendRequest("isOnline","online");
			if (SB.parameters.debugMode) SB.con.api.debug(`"goOffline" packet sent.`);
			setTimeout(process.exit(),300);
		}
	} else {
		process.exit();
	}
}
