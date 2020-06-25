async function apiErrorCheck(error) {
    if (error.name !== "DiscordAPIError") {
        termcon.invalidArgument()
    } else {
        termcon.error(new Error(error))
    }
}

module.exports.user = async function(ca) {
    if (ca[2] === undefined) {
        termcon.invalidArgument()
        return;
    }
    switch(ca[2]){
        case "count":
        case "size":
            termcon.returnValue(SB_Client.users.size);
            break;
        default:
            SB_Client.fetchUser(ca[2])
                .then(info => termcon.returnValue(info) )
                .catch(error => apiErrorCheck(error) )
            break;
    }
}
module.exports.channel = async function(ca) {
    if (ca[2] === undefined) {
        termcon.invalidArgument()
        return;
    }
    switch(ca[2]){
        case "count":
        case "size":
            termcon.returnValue(SB_Client.channels.size)
            break;
        default:
            termcon.invalidArgument()
            break;
    }
}
module.exports.guild = async function(ca) {
    if (ca[2] === undefined) {
        termcon.invalidArgument()
        return;
    }
    switch(ca[2]){
        case "count":
        case "size":
            termcon.returnValue(SB_Client.guilds.size)
            break;
        case "list":
            let tmplist;
            SB_Client.guilds.array().sort().toString().split(",").forEach(async (m) => {
                tmplist+= `${m}\n`;
            })
            termcon.returnValue(tmplist);
            delete(tmplist)
            break;
        default:
            SB_Client.guilds.get(ca[2])
                .then(info => termcon.returnValue(info) )
                .catch(error => apiErrorCheck(error) )
            break;
    }
}
module.exports.bot = async function(ca) {
    if (ca[2] === undefined) {
        termcon.invalidArgument()
        return;
    }
    switch(ca[2]){
        case "":
            break;
        default:
            termcon.invalidArgument()
            break;
    }
}