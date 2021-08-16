const Discord = require('discord.js')
const Command = require("../Structures/Command.js");
const { get } = require('snekfetch');
const config = require('../Data/config.json');
module.exports = new Command({
	name: "yardım",
	description: "Yardım komutu.",
	async run(message, args, client) {

		var prefix = config.prefix

		const embed = new Discord.MessageEmbed()
		.setTitle("Yardım Menüsü")
		.setDescription(`${prefix}ping : Botun pingini görüntüle. \n ${prefix}meme : Rastgele meme atar. \n ${prefix}yazdır : Bota bir şey yazdır. \n ${prefix}owo : OwO \n ${prefix}komut-sayısı : Komut sayısına bakarsınız. \n ${prefix}button : Bas gitsin. \n ${prefix}sil : Mesajları belirlediğin miktar kadar siler. \n ${prefix}8ball : 8ball oynarsınız.`)
		.setColor("RANDOM")
		.setTimestamp()
		.setFooter(client.user.username,client.user.displayAvatarURL({dynamic:true}))
		message.channel.send({embeds:[embed]})

	}
});
