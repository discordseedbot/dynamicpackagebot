const Discord = require("discord.js");
const prefix = SB.core.prefix().default;
const package = SB.package;

module.exports.cmd = function(message, args){
	var request = args.slice(0).join(" ");
	switch (request) {
		case 'userCount':
			var response = SB.core.userCount();
			var userCountResponse = new Discord.MessageEmbed()
				.setColor(SB.core.misc_randHex())
				.setTitle("SeedBot User Count")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(userCountResponse);
			break;
		case 'guildCount':
			var response = SB.core.guildCount();
			var gulidCountResponse = new Discord.MessageEmbed()
				.setColor(SB.core.misc_randHex())
				.setTitle("SeedBot Guild Count")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(gulidCountResponse);
			break;
		case 'channelCount':
			var response = SB.core.channelCount();
			var channelCountResponse = new Discord.MessageEmbed()
				.setColor(SB.core.misc_randHex())
				.setTitle("SeedBot Channel Count")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(channelCountResponse);
			break;
		case 'botVersion':
			var response = package.version;
			var botVerResponse = new Discord.MessageEmbed()
				.setColor(SB.core.misc_randHex())
				.setTitle("SeedBot Version")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(botVerResponse);
			break;
		case 'botBuild':
			var response = package.build.number;
			var botBuildResponse = new Discord.MessageEmbed()
				.setColor(SB.core.misc_randHex())
				.setTitle("SeedBot Bot Build")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(botBuildResponse);
			break;
		case 'botBuildDate':
			var response = package.build.date;
			var buildDateResponse = new Discord.MessageEmbed()
				.setColor(SB.core.misc_randHex())
				.setTitle("SeedBot Build Date")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(buildDateResponse);
			break;
		case 'botBranch':
			var response = package.branch;
			var branchResponse = new Discord.MessageEmbed()
				.setColor(SB.core.misc_randHex())
				.setTitle("SeedBot Branch")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(branchResponse);
			break;
		case 'botOwnerID':
			var response = package.ownerID;
			var botOwnerIDResponse = new Discord.MessageEmbed()
				.setColor(SB.core.misc_randHex())
				.setTitle("SeedBot Owner ID")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(botOwnerIDResponse);
			break;
		case 'packageName':
			var response = package.name;
			var pkgNameResponse = new Discord.MessageEmbed()
				.setColor(SB.core.misc_randHex())
				.setTitle("SeedBot Package Name")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(pkgNameResponse);
			break;
		case 'botLicense':
			var response = package.license;
			var licenseResponse = new Discord.MessageEmbed()
				.setColor(SB.core.misc_randHex())
				.setTitle("SeedBot License")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(licenseResponse);
			break;
		case 'packageDescription':
			var response = package.description;
			var pkgDescResponse = new Discord.MessageEmbed()
				.setColor(SB.core.misc_randHex())
				.setTitle("SeedBot Package Description")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(pkgDescResponse);
			break;
		default:
			var defaultResponse = new Discord.MessageEmbed()
				.setColor("#ff0000")
				.setTitle("Invalid Request")
				.setDescription("You have either put no request, or an invalid request. For more help [check the commands page](https://seedbot.xyz?p=commands).")
			message.channel.send(defaultResponse);
			break;
	}
}
