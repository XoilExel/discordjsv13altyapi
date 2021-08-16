const Discord = require('discord.js')
const Command = require("../Structures/Command.js");
const { get } = require('snekfetch');

module.exports = new Command({
	name: "yazdır",
	description: "Bota bir şey yazdır.",
	async run(message, args, client) {

		let mesaj = args.slice(1).join(' ');
		if (mesaj.length < 1) return message.reply('Bir şey yaz.');
		  message.delete();
		  message.channel.send(mesaj);



	}
});
