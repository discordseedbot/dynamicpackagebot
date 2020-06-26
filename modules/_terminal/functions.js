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

function guildList() {
    let tmplist;
    SB_Client.guilds.array().sort().toString().split(",").forEach(async (m) => {
        tmplist+= `${m}`;
        if (m !== tmplist[tmplist.length - 1]) {
            tmplist+="\n";
        }
    })
    return tmplist.replace("undefined","");
}
module.exports.guild = async function(ca) {
    switch(ca[2]){
        case "count":
        case "size":
            termcon.returnValue(SB_Client.guilds.size)
            break;
        case "list":
            termcon.returnValue(guildList().Promise);
            break;
        default:
            if (ca[2] === undefined) {
                try{
                    termcon.returnValue(`\n${guildList()}`);
                    return;
                } catch(e) {
                    console.error(e);
                    process.exit(1)
                }
            }
            SB_Client.guilds.get(ca[2])
                .then(info => termcon.returnValue(info) )
                .catch(error => guildList(error) )
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