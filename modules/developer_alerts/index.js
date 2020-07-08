const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const channelJSON = require("./config.json");


// Stuff to make my life easy :)
var content = new Discord.MessageEmbed().setColor(Math.floor(Math.random()*16777215).toString(16)).setTimestamp();
function addMsgInfo(message) {
    return content.addField("Message Info",`***Author's User Snowflake:*** ${message.author.id}\n***Author:*** <@${message.author.id}>\n***Guild Snowflake:*** ${message.guild.id}\n***Guild Name:*** ${message.guild.name}\n***Channel Name:*** ${message.channel.name}\n***Channel Snowflake:*** ${message.channel.id}`)
}

// Developer Error 
module.exports.developerError = async function(message,error) {
    if (message.author.bot) return;
    addMsgInfo(message)
    let tmp = content
        .setTitle("Developer Error")
        .setFooter(message.content)
        .setDescription(error)
    SB_Client.channels.cache.get(channelJSON.developer.error).send(tmp);
    delete(tmp);
}
// Userspace Error 
module.exports.userspaceError  = async function(message,error) {
    if (message.author.bot) return;
    addMsgInfo(message)
    let tmp = content.setTitle("Developer Error")
        .setFooter(message.content)
        .setDescription(error)
    SB_Client.channels.cache.get(channelJSON.userspace.error).send(tmp);
}

// Custom Developer Notifications
module.exports.developerNotif = async function (content) {
    SB_Client.channels.cache.get(channelJSON.developer.notifications).send(content)
}

// Custom Userspace Notifications
module.exports.userspaceNotif = async function (content) {
    SB_Client.channels.cache.get(channelJSON.userspace.notifications).send(content)
}

// Developer Alert (e.g developer used command, bot joined server, bot kicked from server, etc...)
module.exports.developerAlert = async function (message,error) {
    if (message.author.bot) return;
    addMsgInfo(message)
    let tmp = content.setTitle("Developer Alert")
        .setFooter(message.content)
        .setDescription(error)
    SB_Client.channels.cache.get(channelJSON.developer.notifications).send(tmp);
}

// Developer Unauthorized Access (user that is not in the config attempted to load a command.)
module.exports.developerUnauth = async function (message,error) {
        // Tell the user they're a dumb cunt.
    SB_Client.on('message', async message => {
        let invalidAuthor = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('You are not a developer')
            .setTimestamp()
            .setDescription("Sorry, You cannot access this command because you are not the maintainer of this project or your ownerID has been setup incorrectly in token.json.");
        message.channel.send(invalidAuthor)
    })
    SB_Client.login(SB_Token.discord())

        // Tell the developers that someone is retarded.
    let dumbCunt = new Discord.MessageEmbed()
        .setColor(Math.floor(Math.random()*16777215).toString(16))
        .setTitle("Unauthorised User Accessed Developer Command")
        .setTimestamp()
        .setDescription("Invalid User tried to access a developer command (ID: "+message.author.id+", Username: <@"+message.author.id+"> or @"+message.author.username+"#"+message.author.discriminator+")")
    SB_Client.channels.cache.get(channelJSON.developer.unauthAccess).send(dumbCunt);
}
