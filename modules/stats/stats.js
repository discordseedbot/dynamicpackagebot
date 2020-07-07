const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const prefix = SB_CoreLibrary.prefix().default;
const package = require("./../../package.json");

module.exports.cmd = function(message, args){
	var request = args.slice(0).join(" ");
	switch (request) {
		case 'userCount':
			var response = SB_CoreLibrary.userCount();
			var userCountResponse = new Discord.MessageEmbed()
				.setColor(SB_CoreLibrary.misc_randHex())
				.setTitle("SeedBot User Count")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(userCountResponse);
			break;
		case 'guildCount':
			var response = SB_CoreLibrary.guildCount();
			var gulidCountResponse = new Discord.MessageEmbed()
				.setColor(SB_CoreLibrary.misc_randHex())
				.setTitle("SeedBot Guild Count")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(gulidCountResponse);
			break;
		case 'channelCount':
			var response = SB_CoreLibrary.channelCount();
			var channelCountResponse = new Discord.MessageEmbed()
				.setColor(SB_CoreLibrary.misc_randHex())
				.setTitle("SeedBot Channel Count")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(channelCountResponse);
			break;
		case 'botVersion':
			var response = package.version;
			var botVerResponse = new Discord.MessageEmbed()
				.setColor(SB_CoreLibrary.misc_randHex())
				.setTitle("SeedBot Version")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(botVerResponse);
			break;
		case 'botBuild':
			var response = package.build[0];
			var botBuildResponse = new Discord.MessageEmbed()
				.setColor(SB_CoreLibrary.misc_randHex())
				.setTitle("SeedBot Bot Build")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(botBuildResponse);
			break;
		case 'botBuildDate':
			var response = package.build[1];
			var buildDateResponse = new Discord.MessageEmbed()
				.setColor(SB_CoreLibrary.misc_randHex())
				.setTitle("SeedBot Build Date")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(buildDateResponse);
			break;
		case 'botBranch':
			var response = package.branch;
			var branchResponse = new Discord.MessageEmbed()
				.setColor(SB_CoreLibrary.misc_randHex())
				.setTitle("SeedBot Branch")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(branchResponse);
			break;
		case 'botOwnerID':
			var response = package.ownerID;
			var botOwnerIDResponse = new Discord.MessageEmbed()
				.setColor(SB_CoreLibrary.misc_randHex())
				.setTitle("SeedBot Owner ID")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(botOwnerIDResponse);
			break;
		case 'packageName':
			var response = package.name;
			var pkgNameResponse = new Discord.MessageEmbed()
				.setColor(SB_CoreLibrary.misc_randHex())
				.setTitle("SeedBot Package Name")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(pkgNameResponse);
			break;
		case 'botLicense':
			var response = package.license;
			var licenseResponse = new Discord.MessageEmbed()
				.setColor(SB_CoreLibrary.misc_randHex())
				.setTitle("SeedBot License")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(licenseResponse);
			break;
		case 'packageDescription':
			var response = package.description;
			var pkgDescResponse = new Discord.MessageEmbed()
				.setColor(SB_CoreLibrary.misc_randHex())
				.setTitle("SeedBot Package Description")
				.setDescription(`Request:\n \`\`\` ${request} \`\`\`\nResponse:\n \`\`\` ${response} \`\`\` `)
			message.channel.send(pkgDescResponse);
			break;
		default:
			var defaultResponse = new Discord.MessageEmbed()
				.setColor("#ff0000")
				.setTitle("Invalid Request")
				.setDescription("You have either put no request, or an invalid request. For more information [click here](https://seedbot.xyz?commands).")
			message.channel.send(defaultResponse);
			break;
	}
}
