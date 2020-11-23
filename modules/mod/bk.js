const Discord = require("discord.js");
var prefix = SB.prefrences.prefix.default

function tFilter(type,tense) {
	if (type.toLowerCase() === "ban") {
		switch(tense) {
			case "past":
				return `${type}ned`;
				break;
			case "present":
				return `${type}ning`;
				break;
			case "future":
				return `will be ${type}ned`;
				break;
			case "able":
				return `${type}nable`;
				break;
		}
	}
	else if (type.toLowerCase() === "kick") {
		switch(tense) {
			case "past":
				return `${type}ed`;
				break;
			case "present":
				return `${type}ing`;
				break;
			case "future":
				return `will be ${type}ed`;
				break;
			case "able":
				return `${type}able`;
				break;
		}
	}
}

function messageGenerator(type,message) {
	var mss = new SB.modules.node.discord.MessageEmbed()
		base.setColor("#990000")
		.setAuthor(`${message.mentions.user.first().username} ${tFilter(type,'past')}`)
		.setDescription(`Reason \`${message.content.slice(prefix.length).trim().split( / +/g).slice(1).join(' ')}\``)
		.setTimestamp()
		.setFooter(`${tFilter(type,'past')} by ${message.author.username}`)
	message.channel.send(mss)

	mss.setAuthor(`You were ${tFilter(type,'past')} from ${message.guild.name}`)
	SB.client.users.cache.get(message.mentions.user.first().id).send(mss)
	return;
}

module.exports = function(message) {
	let reason = message.content.slice(prefix.length).trim().split( / +/g).slice(1).join(' ');
	let naughty = message.mentions.users.first();
	var cmd = args.shift().toLowerCase();
	if (reason.length < 1) { message.reply(`You must supply a reason for the ${cmd}.`); return false; }
	if (naughty === undefined) { message.reply(`You must mention someone to ${cmd} them.`); return false; }

	var hasPerm = `${cmd}_MEMBERS`;
	var cc = message.guild.member(naughty).kickable;
	if (cmd === "ban") {
		cc = message.guild.member(naughty).bannable;
	}
	if (cc){ message.reply(`I cannot ${cmd} that member`); return false; };
	if (!message.member.hasPermission(hasPerm)) {message.reply(`You do not have permissions to ${cmd}.`); return false;}
	if (!message.guild.me.hasPermission(hasPerm)) {message.reply(`I don't have permission to ${cmd}!`); return false;}
	message.guild.member(naughty).ban({reason: message.content.slice(prefix.length).trim().split( / +/g).slice(1).join(' ')}).then((member) => {
		messageGenerator(args.shift().toLowerCase(),message);
	})
}
