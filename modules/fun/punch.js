const package = require("./../../package.json");

module.exports.cmd = function(message, args) {
	var ownerstuff = "<@" + package.ownerID + ">";
	var choice = args.slice(0).join(' ');
	if (choice.length > 1) {
		if(choice !== ownerstuff){
			message.channel.send('You have punched ' + choice);
		} else {
			message.channel.send("you can't hurt him you pleblord.");
		}
	}
}
