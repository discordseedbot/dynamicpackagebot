const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const response = require("./response.json");

module.exports.github = function(message) {
	let evalEmbed = new Discord.MessageEmbed()
		.setColor(SB_CoreLibrary.misc_randHex())
		.setTitle(response.github.title)
		.setDescription(`${response.github.desc}`)
		.setTimestamp()
	message.channel.send(evalEmbed);
}

module.exports.contributors = function(mg){
	try {
		let pkg = SB_Package;
		let evalEmbed = new Discord.MessageEmbed()
			.setColor(SB_CoreLibrary.misc_randHex())
			.setTitle("SeedBot Contributors")
			.setFooter(`v${pkg.version} | build ${pkg.build.number}`)
		pkg.contributors.forEach((ct)=>{
			let content = `[${ct.name}](${ct.homepage}) \[${ct.contact}\]`;
			evalEmbed.addField(ct.position,content,true)
		})
		mg.channel.send(evalEmbed)
	} catch(e){
		console.error(e);
	}
}
