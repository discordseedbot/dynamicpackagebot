const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const prefix = SB_CoreLibrary.prefix().dev;

module.exports.list = function(message) {
	var msg;
	function varadd(one,two){
		msg=`${msg}${one} ${two}\n`;
	}
	message.guild.roles.cache.forEach(async (role) => {varadd(role.name, role.id)})
		message.channel.send(`\`${msg}\``);
}
module.exports.create = function(message,args) {
	var role_name = args.slice(0).join(' ')
	if (args.slice(0).join(' ').length < 1){
		message.reply("No Role Name Given, Aborting...\n Try `s~role_create Admin` to create a role with the name of Admin.");
	} else {
		message.guild.roles.create({ data: { name: role_name, hoist: true } });
		message.channel.send("Created Role with the name of `${role_name}`")
	}
}
module.exports.give = function(message,args) {
	try {
		const guild = SB_Client.guilds.cache.get(message.guild.id);
		let role = args.slice(1).join(' ');
		let member = message.mentions.members.first();
		member.roles.add(role);
	} catch (err) {
		message.channel.send(err)
		console.error(err)
	}
	message.channel.send("Done!");
}
