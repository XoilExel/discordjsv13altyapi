const Discord = require('discord.js')
const Command = require("../Structures/Command.js");
const { get } = require('snekfetch');

module.exports = new Command({
	name: "meme",
	description: "Rastgele meme atar.",
	async run(message, args, client) {
		
		const a = await get('https://meme-api.herokuapp.com/gimme/wholesomememes').set('Authorization', 'API ANAHTARINIZ.');
		if (!a || !a.body || !a.body.url) return message.channel.send("Hata oluştu");
		message.channel.send({embeds:[new Discord.MessageEmbed().setColor("RANDOM").setTitle(a.body.title).setImage(a.body.url)]})
	  

	}
});
