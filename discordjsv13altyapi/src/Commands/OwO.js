const Discord = require('discord.js')
const Command = require("../Structures/Command.js");
const { get } = require('snekfetch');

module.exports = new Command({
	name: "owo",
	description: "OwO.",
	async run(message, args, client) {

		message.channel.send("OwO")
	}
});
