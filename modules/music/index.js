module.exports = async function() {
	const music = require('seedbot_addonmusic');
	var errorCH;
	if (SB_Prefrences.developer_notif.enable) {
		errorCH = SB_Prefrences.developer_notif.userspaceError.error
	}  else {
		errorCH = undefined;
	}
	music.start(SB_Client, {
	  youtubeKey: SB_Token.youtube(),
	  cooldown:{
	    disabled:false,
	    timer:10
	  },
	  botPrefix: SB_CoreLibrary.prefix().music,
	  anyoneCanSkip: true,
	  anyoneCanAdjust: true,
	  inlineEmbeds: false,
	  logging: false,
	  errorChannel: errorCH
	});

	SB_Client.on('ready', () => {
		botModuleConsole.loaded("Music");
	})
}
