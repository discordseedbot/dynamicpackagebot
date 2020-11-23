const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const client = new Discord.Client();
const prefix = SB.core.prefix.default;

module.exports.cmd = function(message, args) {
	var choice = args.slice(0).join(' ');;
	var botChoice;
	var outcome;
	var result;
	var output;
	if (choice.length < 1){
		message.reply("Please specify either rock, paper or scissors.");
		return ;
	}
	if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
		message.reply("Please specify either rock, paper or scissors. `" + choice + "` isn't one of those :P");
		return ;
	}


	//Bot Picks Rock, Paper, or Scissors.
	let numbrandomonetothree = Math.floor(Math.random() * 3) + 1;
	switch (numbrandomonetothree) {
	case 1:
	  botChoice = "rock";  break;
	case 2:
	  botChoice = "paper"; break;
	case 3:
	  botChoice = "scissors"; break;
	}

	//Tie
	if (choice && botChoice === "rock") {
	outcome = "Tie"; result = "Rock - Rock";
	}
	if (choice && botChoice === "paper") {
	outcome = "Tie"; result = "Paper - Paper";
	}
	if (choice && botChoice === "scissors") {
	outcome = "Tie"; result = "Scissors - Scissors";
	}

	//Lost
	if (choice === "rock" && botChoice === "paper") {
	outcome = "You Lost"; result = "Rock - Paper";
	}
	if (choice === "scissors" && botChoice === "rock") {
	outcome = "You Lost"; result = "Scissors - Rock";
	}
	if (choice === "paper" && botChoice === "scissors") {
	outcome = "You Lost"; result = "Paper - Scissors";
	}

	//Won
	if (choice === "rock" && botChoice === "scissors") {
	outcome = "You Won"; result = "Rock - Scissors";
	}
	if (choice === "paper" && botChoice === "rock") {
	outcome = "You Won"; result = "Paper - Rock";
	}
	if (choice === "scissors" && botChoice === "paper") {
	outcome = "You Won"; result = "Scissors - Paper";
	}

	message.channel.send(output = "**" + outcome + "**\n" + result);
}
