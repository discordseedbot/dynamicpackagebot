module.exports = function() {

    // Print all Libaries
    //console.log(libr);

    SB_Client.on('ready', async () => {
        
        //console.log(client.users.fetch('dhdgh'))
    })
    let totalSize=0;
    SB_Client.guilds.cache.forEach(m => {
        console.log(m)
        console.log(m.memberCount)
    })

    SB_Client.on('message', async message => {
        if (message.author.bot) return;
        console.log(`[${message.author.id}] - ${message.content}`)
    })
}
