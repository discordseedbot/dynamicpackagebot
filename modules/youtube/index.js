var prefix = SB.prefrences.prefix.default;

module.exports = function() {
    SB.client.on('message', async message => {
        if (message.author.bot) return;
        if (message.content.indexOf(prefix) !== 0) return;
        var args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        try {
            switch (command.toLowerCase()) {
                case "videoinfo":
                    require(`./${command.toLowerCase()}.js`)(message,args);
                    break;
            }
        } catch (err) {
			SB.modules.libraries.forEach(async (m) => {
				if (m.name === "developer_alerts") {
					let tmpRequire = require(`./../../${m.location}/${m.main}`).userspaceError(message, err);
					console.error(err)
				}
			})
        }

    })

	SB.client.on('ready', async () => {
        SB.con.module.bot.loaded("Youtube");
    })
}
