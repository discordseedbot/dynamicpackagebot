const package = require('./../../package.json');

module.exports.cmd = function(message,args) {
        let guildid = args.slice(0).join(' ');
        let guild = SB_Client.guilds.get(guildid);
        if (!guild) return message.reply("The bot isn't in the guild with this ID.");

        guild.fetchInvites()
            .then(invites => message.channel.send('Found Invites:\nhttps://discord.gg/' + invites.map(invite => invite.code).join('\n')))
            .catch(console.error);
}
