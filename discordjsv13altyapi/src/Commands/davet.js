const Discord = require('discord.js')
const Command = require("../Structures/Command.js");
const { MessageActionRow, MessageButton } = require('discord.js');


module.exports = new Command({
	name: "davet",
	description: "Botu davet edersin.",
	async run(message, args, client) {


		const davet = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
				.setLabel('Davet Et')
				.setStyle('LINK'),

				new MessageButton()
				.setURL(`https://discord.gg/discordlinkiniz`)
				.setLabel('Destek Sunucusu')
				.setStyle('LINK'),
		);

		const embed = new Discord.MessageEmbed()
		.setAuthor(message.author.tag,message.author.displayAvatarURL({dynamic:true}))
		.setDescription(`${client.user.username} botunu sunucunuza davet etmek için aşağıdaki butona tıklayın!`)
		.setColor("RANDOM")
		message.channel.send({ embeds: [embed] , components: [davet] })
	
	}
});
