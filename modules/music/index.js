module.exports = async function() {
	const music = require('seedbot_addonmusic');
	var errorCH;
	if (SB.prefrences.developer_notif.enable) {
		errorCH = SB.prefrences.developer_notif.userspaceError.error
	}  else {
		errorCH = undefined;
	}
	music.start(SB.client, {
	  youtubeKey: SB.token.youtube,
	  cooldown:{
	    disabled:false,
	    timer:10
	  },
	  botPrefix: SB.prefrences.prefix.music,
	  anyoneCanSkip: true,
	  anyoneCanAdjust: true,
	  inlineEmbeds: false,
	  logging: false,
	  errorChannel: errorCH
	});

	SB.client.on('ready', () => {
		SB.con.module.bot.loaded("Music");
	})
}
