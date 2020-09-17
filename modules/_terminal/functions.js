async function apiErrorCheck(error) {
    if (error.name !== "DiscordAPIError") {
        SB.core.con.invalidArgument()
    } else {
        SB.core.con.error(new Error(error))
    }
}

module.exports.user = async function(ca) {
    if (ca[2] === undefined) {
        SB.con.invalidArgument()
        return;
    }
    switch(ca[2]){
        case "count":
        case "size":
            SB.con.returnValue(SB.core.userCount());
            break;
        default:
            SB_Client.users.fetch(ca[2])
                .then(info => termcon.returnValue(info) )
                .catch(error => apiErrorCheck(error) )
            break;
    }
}
module.exports.channel = async function(ca) {
    if (ca[2] === undefined) {
        SB.con.invalidArgument()
        return;
    }
    switch(ca[2]){
        case "count":
        case "size":
            SB.con.returnValue(SB.core.channelCount())
            break;
        default:
            SB.con.invalidArgument()
            break;
    }
}

function guildList() {
    let tmplist;
    SB.client.guilds.array().sort().toString().split(",").forEach(async (m) => {
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
            SB.con.returnValue(SB.core.guildCount())
            break;
        case "list":
            SB.con.returnValue(guildList().Promise);
            break;
        default:
            if (ca[2] === undefined) {
                try{
                    SB.con.returnValue(`\n${guildList()}`);
                    return;
                } catch(e) {
                    console.error(e);
                    process.exit(1)
                }
            }
            SB.core.guilds.get(ca[2])
                .then(info => SB.core.con.returnValue(info) )
                .catch(error => guildList(error) )
            break;
    }
}
module.exports.bot = async function(ca) {
    if (ca[2] === undefined) {
        SB.con.invalidArgument()
        return;
    }
    switch(ca[2]){
        case "libraries":
            SB.con.returnValue(`\n${Sb.libraries}`);
            return;
            break;
        default:
            SB.con.invalidArgument()
            break;
    }
}
