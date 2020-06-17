module.exports = function (client,token) {
    const signale = require("signale");

    client.on('ready', async () => {
			signale.debug("Bot has started at " + new Date());
			signale.debug(`Bot has started, with ` + client.users.size + ` users, in ` + client.channels.size + ` channels of ` + client.guilds.size + ` guilds.`);
			signale.debug(`Logged in as '${client.user.username}' ('@${client.user.username}#${client.user.discriminator}', ID: ${client.user.id})`)
			signale.debug(`Invite Codes;\n		Full Admin:   https://seedbot.xyz/inv.php?a=${client.user.id}&b=8\n		Normal Perms: https://seedbot.xyz/inv.php?a=${client.user.id}&b=3329088\n`)


                // Start Rich Presence Detection
            var config;
            try {
                config = require("./config.json");
            } catch (e) { console.error(e); process.exit(69); }

            var msg; var rpcTYPE; var typeurl; var status;

            function procCheck(p) {
                if (!p) {
                    return false;
                } else {
                    return true;
                }
            }

            //  Message
            if (config.activity.message !== undefined) {
                var msg = config.activity.message;
            } else {return;}

            //  Type
            switch (config.activity.type.toUpperCase()) {
                case 'PLAYING':
                case 'STREAMING':
                case 'LISTENING':
                case 'CUSTOM':
                    rpcTYPE = config.activity.type.toUpperCase();
                    break;
                default:
                    rpcTYPE = 'PLAYING';
                    break;
            }

            if (rpcTYPE === "STREAMING") {
                if (config.activity.stream_url.startsWith("https://twitch.tv/") || config.activity.stream_url.startsWith("https://youtube.com/")) {
                    typeurl = config.activity.stream_url;
                } else {
                    typeurl = undefined;
                    console.error("Activity URL is invalid/unsupported in modules/startup/config.json");
                }
            }

            // Check if there is a suffix. And if there is add it to the end of the message.
            if (config.activity.suffix.length < 1 || config.activity.suffix !== undefined) {
                msg += ` - ${config.activity.suffix}`;
            }

            // Check if url is a "valid" twitch url and the type is "STREAMING".

            switch (config.activity.status.toUpperCase()) {
                case 'ONLINE':
                case 'IDLE':
                case 'DND':
                case 'INVISIBLE':
                case 'OFFLINE':
                    status = config.activity.status.toUpperCase();
                    break;
                default:
                    status = "ONLINE";
                    break;
            }


            client.user.setPresence({game: { name: msg, type: rpcTYPE, url: typeurl}});
			client.user.setStatus(status);

            // To avoid memory leaks in the future.
            delete(msg);
            delete(rpcTYPE);
            delete(typeurl);
            delete(status);
            delete(config);
		});
}
