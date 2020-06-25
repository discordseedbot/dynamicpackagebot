
// Just incase for some stupid wank stain.
module.exports = function() {
    console.error(new Error("Some Developer is a dumb cunt."));
}

module.exports.print = async function (data) {
    let commandArguments = data.shift()
    console.log(commandArguments.length)
    if (commandArguments[0] === undefined || commandArguments[1] === undefined) {
        console.error("Not Enough Arguments")
        return false;
    }
    var phunk = require("./functions.js")
    switch (commandArguments[0]) {
        case "user":
        case "users":
            phunk.user(commandArguments[1]);
            break;
        case "channel":
        case "channels":
            phunk.channel(commandArguments[1]);
            break;
        case "guild":
        case "server":
        case "guilds":
        case "servers":
            phunk.guild(commandArguments[1]);
            break;
        case "bot":
            phunk.bot(commandArguments[1]);
            break;
        case "package":
            console.log(require("./../../package.json"));
            break;
        default:
            termcon.invalidArgument()
            break;
    }
}