const db = require("./copypasta.json");

module.exports.cmd = function(message) {
	function objectLength(obj) {
		var result = 0;
		for(var prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				// or Object.prototype.hasOwnProperty.call(obj, prop)
				result++;
			}
		}
		return result;
	}
	var selection = "0";
	var ceiling = objectLength(db) - 1;
	while(selection < ceiling) {
		let choiceArray = Math.floor(Math.random() * ceiling);
		selection = db[choiceArray];
	}
	message.channel.send(selection);
}
