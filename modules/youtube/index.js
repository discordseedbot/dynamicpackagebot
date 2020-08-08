var prefix = SB_CoreLibrary.prefix().default;

module.exports = function() {
    SB_Client.on('message', async message => {
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
			SB_Libraries.forEach(async (m) => {
				if (m.name === "developer_alerts") {
					let tmpRequire = require(`./../../${m.location}/${m.main}`).userspaceError(message, err);
					console.error(err)
				}
			})
        }

    })

	SB_Client.on('ready', async () => {
        botModuleConsole.loaded("Youtube");
    })
}
