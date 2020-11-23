const ytdl = require('ytdl-core');
const Discord = require("discord.js");

function commafy( num ) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join(',');
}

module.exports = async function(message,args) {
	message.channel.stopTyping()
	message.channel.startTyping()
	const m = await message.channel.send("Searching Video...")
	if (args[0] === undefined) {
		m.edit("No Video Given, Check the commands page.\nhttps://seedbot.xyz?p=commands")
		return;
	}
	var videoID = args[0];

	if (!ytdl.validateURL(videoID)) {
		if (!ytdl.validateID(videoID)) {
			m.edit("Invalid Video ID/Video URL");
			message.channel.stopTyping()
			return;
		}
	}

	var info = await ytdl.getInfo(videoID);


	var final = new Discord.MessageEmbed()
		.setColor(SB.core.misc_randHex())
		.setTitle(info.videoDetails.title)
		.setURL(`https://youtube.com/watch?v=${info.videoDetails.videoId}`)
		.setAuthor(info.videoDetails.author.name, info.videoDetails.author.avatar, info.videoDetails.author.channel_url)
		.addField("Description", info.videoDetails.shortDescription.substring(0, 1022),false)
		.addField("Video Information", `**${commafy(info.videoDetails.viewCount)}** views\r\n**Duration** ${new Date(info.videoDetails.lengthSeconds * 1000).toISOString().substr(14, 5)}\r\n**Category** ${info.videoDetails.category}\r\n**Age Restricted** ${info.videoDetails.age_restricted}\r\n**Publish Date** ${info.videoDetails.publishDate}`,true)
		.setTimestamp()
		info.formats.forEach(i => {
			if (i.mimeType.includes("video/") && i.hasAudio && i.hasVideo) {
				final.addField(`Download [${i.qualityLabel} ${i.width}x${i.height}@${i.fps}]`,`[${i.mimeType}](${i.url})`)
				/*console.log(`[VIDEO] [${i.width}x${i.height}@${i.fps}] [${i.qualityLabel}]`)
				console.log(`[AUDIO] [${i.audioBitrate} kb/s] [${i.audioQuality}]`)
				console.log(`${i.url}`)
				console.log()*/
			}
		})
	info.videoDetails.thumbnail.thumbnails.forEach(t => {
		if (t.url.includes("maxresdefault.jpg")) {
			final.setThumbnail(t.url);
		}
	})
	m.edit(final).then(() => {
		message.channel.stopTyping()
	})
	delete(final);
	return;
}
