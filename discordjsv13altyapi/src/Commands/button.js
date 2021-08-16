const Discord = require('discord.js')
const Command = require("../Structures/Command.js");
const { MessageActionRow, MessageButton } = require('discord.js');


module.exports = new Command({
	name: "button",
	description: "Bas gitsin.",
	async run(message, args, client) {


		



		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('primary')
				.setLabel('Tıkla')
				.setStyle('SUCCESS'),
		);


	const m = await message.channel.send({ content:"Button",components: [row] });
	

	const filter = i => i.user.id === message.author.id;

	const collector = m.channel.createMessageComponentCollector({ filter, time: 15000 });
	collector.on('collect', async i => {
		if (i.customId === 'primary') {
			await i.deferUpdate();
			await i.editReply({ content: `${i.member.user.tag} buttona tıkladı`, components: [] });
		}
	});
	
	
	}
});
