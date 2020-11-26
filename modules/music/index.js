module.exports = async function() {
	const music = require('sbpkg_music');
	var errorCH;
	if (SB.prefrences.core.developerAlerts.enable) {
		errorCH = SB.prefrences.core.developerAlerts.userspace.error
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
