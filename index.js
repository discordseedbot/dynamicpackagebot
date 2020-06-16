console.clear();

const fs = require("fs");
const signale = require("signale");

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path+'/'+file).isDirectory();
  });
}

var moduleArray = getDirectories("modules/");
var viableModules = [];

//			Check each of the directories in "modules/" if they have a "manifest.json" file.
for (i = 0; i < moduleArray.length; i++) {
	let tmpManiLoc = `modules/${moduleArray[i]}/manifest.json`;
	if (!fs.existsSync(tmpManiLoc)) {
		signale.error(`[modman] module cannot be loaded, manifest not found for module "${moduleArray[i]}" in "${tmpManiLoc}"`);
	} else {
		viableModules.push(`modules/${moduleArray[i]}`);
	}
}

//			If there are no valid modules quit process.
if (viableModules.length < 1) {
	signale.log("[modman] No valid modules found.");
	process.exit(0);
}

//			Check if manifest for the module is valid
for (j = 0; j < viableModules.length; j++) {
	try {
		var json = require(`./${viableModules[j]}/manifest.json`).name;
	} catch (e) {
		// JSON Invalid
		switch (e.code) {
			case "MODULE_NOT_FOUND":
				signale.fatal("invalid location? but we checked that in lines 16 to 23, huh. probably should tell the developers that.");
				process.exit(69);
				break;
			default:
				signale.fatal(`[modman] Manifest is invalid at "${viableModules[j]}/manifest.json"`);
				viableModules.splice(j);
				break;
		}
		console.error(e)
	}
	delete(jsontemp);
}

//			Check if any of the modules are libraries and if they are, remove them from the viableModules array.
var botModulesToLoad = [];var genericModulesToLoad = [];var libraries = [];
for (k=0;k<viableModules.length;k++) {
	try {
		let jsontemp = require(`./${viableModules[k]}/manifest.json`);
		let filepush = `${viableModules[k]}/${jsontemp.main}`;
		switch (jsontemp.type) {
			case "botmod":
				botModulesToLoad.push(filepush);
				break;
			case "generic":
				genericModulesToLoad.push(filepush);
				break;
			case "library":
				let tmparr = JSON.parse(`{"name": "${viableModules[k].replace("modules/","")}","main": "${jsontemp.main}","location":"${viableModules[k]}"}`);
				libraries.push(tmparr);
				delete(tmparr);
				break;
			default:
				signale.warn(`[modman] Unknown Module type at "${viableModules[k]}/manifest.json"`);
				break;
		}
	} catch(e) {
		signale.error("[modman] An Error Occoured while sorting modules.");
		console.error(e);
	}
}
console.log(libraries);
//			Load Discord Bot Modules
const Discord = require('discord.js');
const client = new Discord.Client();
for (l=0;l<libraries.length;l++) {
	if (libraries[l].name === "core") {
		const token = require(`./${libraries[l].location}/${libraries[l].main}`).tokenManager()
	}
}
for (m=0;m<botModulesToLoad.length;m++) {

}
