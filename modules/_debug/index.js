module.exports = function() {

    // Print all Libaries
    //console.log(libr);

    SB_Client.on('ready', async () => {
        
        //console.log(client.users.fetch('dhdgh'))
    })

    SB_Client.on('message', async message => {
        if (message.author.bot) return;
        console.log(`[${message.author.id}] - ${message.content}`)
    })
}
