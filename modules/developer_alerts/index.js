const discord = require("discord.js");
const channelJSON = require("./error_handle.json");


// Stuff to make my life easy :)
var content = new Discord.RichEmbed().setColor(Math.floor(Math.random()*16777215).toString(16)).setTimestamp();
function addMsgInfo(message) {
    content = content.setDescription("Invalid User tried to access a developer command (ID: "+message.author.id+", Username: <@"+message.author.id+"> or @"+message.author.username+"#"+message.author.discriminator+")")
}

// Developer Error 
module.exports.developerError = async function(client,token,libr) {
    if (message.author.bot) return;
    client.on('message', async message => {
        let tmp = content.setTitle("Developer Error")
            .setFooter(message.content)
            .setDescription(error)
        addMsgInfo(message)
		client.channels.get(channelJSON.developer.error).send(devErrorSend);
    })
    client.login(token.discord())
}

// Custom Developer Notifications
module.exports.developerNotifCustom = async function (client,content) {
    client.channels.get(channelJSON.developer.notifications).send(content)
}

// Developer Alert (e.g developer used command, bot joined server, bot kicked from server, etc...)
module.exports.developerAlert = async function (client,token,libr) {
    if (message.author.bot) return;
    client.on('message', async message => {
        let tmp = content.setTitle("Developer Alert")
            .setFooter(message.content)
            .setDescription(error)
        addMsgInfo(message)
		client.channels.get(channelJSON.developer.notifications).send(devErrorSend);
    })
    client.login(token.discord())
}
module.exports.developerUnauthAccess = async function (client,token,libr) {
        // Tell the user they're a dumb cunt.
    client.on('message', async message => {
        let invalidAuthor = new Discord.RichEmbed()
            .setColor('#ff0000')
            .setTitle('You are not a developer')
            .setTimestamp()
            .setDescription("Sorry, You cannot access this command because you are not the maintainer of this project or your ownerID has been setup incorrectly in token.json.");
        message.channel.send(invalidAuthor)
    })
    client.login(token.discord())

        // Tell the developers that someone is retarded.
    let dumbCunt = new discord.RichEmbed()
        .setColor(Math.floor(Math.random()*16777215).toString(16))
        .setTitle("Unauthorised User Accessed Developer Command")
        .setTimestamp()
        .setDescription("Invalid User tried to access a developer command (ID: "+message.author.id+", Username: <@"+message.author.id+"> or @"+message.author.username+"#"+message.author.discriminator+")")
    client.channels.get(channelJSON.developer.unauthAccess).send(dumbCunt);
}