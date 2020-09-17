const Discord = require("discord.js");
const response = require("./response.json");

module.exports.contributors = function(mg){
	try {
		let pkg = SB.package;
		let evalEmbed = new Discord.MessageEmbed()
			.setColor(SB.core.misc_randHex())
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
