const Discord = require('discord.js')
const Command = require("../Structures/Command.js");


module.exports = new Command({
	name: "8ball",
	description: "8ball oynarsınız.",
	async run(message, args, client) {
		let mesaj = args.slice(1).join(' ');
		if (mesaj.length < 1) return message.reply('Bir şey yaz.');
		var rand = ['Evet', 'Hayır', 'Neden çabalıyorsun?', 'Ne düşünüyorsun? NUMARA', 'Belki', 'Asla', 'Evet'];
		message.channel.send(rand[Math.floor(Math.random()*rand.length)]);
	}
});
