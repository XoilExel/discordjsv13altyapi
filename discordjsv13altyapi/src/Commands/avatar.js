const Discord = require('discord.js')
const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "avatar",
	description: "Avatarını gösterir.",
	async run(message, args, client) {

		
		let user = message.mentions.users.first() || message.author;


		const embed = new Discord.MessageEmbed()
		.setTitle(`İşte ${user.tag} Kullanıcısının Avatarı`)
		.setImage(user.displayAvatarURL({dynamic:true}))
		.setColor("RANDOM")

		message.channel.send({embeds:[embed]})
		
	
	}
});
