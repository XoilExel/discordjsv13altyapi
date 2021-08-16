const Discord = require('discord.js')
const Command = require("../Structures/Command.js");
const { get } = require('snekfetch');

module.exports = new Command({
	name: "komut-sayısı",
	description: "Komut sayısına bakarsınız.",
	async run(message, args, client) {
		
		const embed = new Discord.MessageEmbed()
		.setTitle("Komut Sayısı")
		.setColor("RANDOM")
		.setDescription(`Komut sayısı : ${client.commands.size}`)
		message.channel.send({embeds:[embed]})
	}
});
