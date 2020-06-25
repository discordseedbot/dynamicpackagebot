const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");

module.exports.work = function(message,args) {
    args = args.slice(0).join(' ');
    switch(args) {
        case "usercount":
            let usercount = SB_Client.users.size;

            let evalEmbed1 = new Discord.RichEmbed()
                .setColor('#90d190')
                .setTitle('User Count')
                .setTimestamp()
                .setDescription(usercount);
            message.channel.send(evalEmbed1); break;
        case "serverlist":
            var serverlist = SB_Client.guilds.array().sort();
            serverlist.toString().replace(",", "\n");

            let evalEmbed2 = new Discord.RichEmbed()
                .setColor('#90d190')
                .setTitle('Server List')
                .setAuthor("Number of Available Servers: " + SB_Client.guilds.size)
                .setTimestamp()
                .setDescription(serverlist);
            message.channel.send(evalEmbed2); break;
        case "channelcount":
            let channelcount = SB_Client.channels.size;

            let evalEmbed3 = new Discord.RichEmbed()
                .setColor('#90d190')
                .setTitle('Channel Count')
                .setTimestamp()
                .setDescription(channelcount);
            message.channel.send(evalEmbed3); break;
    }
}
