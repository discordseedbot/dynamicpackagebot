const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.work = function(message,args) {
    args = args.slice(0).join(' ');
    switch(args) {
        case "usercount":
            let evalEmbed1 = new Discord.MessageEmbed()
                .setColor('#90d190')
                .setTitle('User Count')
                .setTimestamp()
                .setDescription(SB_CoreLibrary.userCount());
            message.channel.send(evalEmbed1); break;
        case "serverlist":
            let evalEmbed2 = new Discord.MessageEmbed()
                .setColor('#90d190')
                .setTitle('Server List')
                .setAuthor("Number of Available Servers: " + SB_CoreLibrary.guildCount())
                .setTimestamp()
                .setDescription(SB_Client.guilds.cache.map(m => m.name).join("\n"));
            message.channel.send(evalEmbed2); break;
        case "channelcount":
            let evalEmbed3 = new Discord.MessageEmbed()
                .setColor('#90d190')
                .setTitle('Channel Count')
                .setTimestamp()
                .setDescription(channelcount);
            message.channel.send(evalEmbed3); break;
    }
}
