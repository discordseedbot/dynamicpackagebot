module.exports = function(client,token,libr) {

    // Print all Libaries
    console.log(libr);

    client.on('message', async message => {
        if (message.author.bot) return;
        console.log(`[${message.author.id}] - ${message.content}`)
    })
}