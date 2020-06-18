module.exports.tokenManager = function() {
	return require("./token_manager.js");
}

module.exports.misc_randHex = function() {
	return Math.floor(Math.random()*16777215).toString(16);
}
