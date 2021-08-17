const Discord = require('discord.js')
const Command = require("../Structures/Command.js");
const config = require('../Data/config.json');
const { MessageActionRow, MessageEmbed, MessageSelectMenu } = require('discord.js');



module.exports = new Command({
	name: "yardım2",
	description: "Yardım komutu.",
	async run(message, args, client) {

		var prefix = config.prefix

		const embed = new Discord.MessageEmbed()
		.setTitle("Yardım Menüsü")
		.setDescription(`bot : Bot komutlarını görüntüle \n eğlence : Eğlence komutlarını görüntüle. \n moderasyon : Moderasyon komutlarını görüntüle. \n kullanıcı : Kullanıcı komutlarını görüntüle.`)
		.setColor("RANDOM")
		.setTimestamp()
		.setFooter(client.user.username,client.user.displayAvatarURL({dynamic:true}))
		

		const bot = new Discord.MessageEmbed()
		.setTitle("Bot Menüsü")
		.setDescription(`${prefix}ping : Botun pingini görüntüle. \n ${prefix}komut-sayısı : Komut sayısına bakarsınız. \n ${prefix}button : Bas gitsin. \n ${prefix}davet : Botu davet edersin. `)
		.setColor("RANDOM")
		.setTimestamp()
		.setFooter(client.user.username,client.user.displayAvatarURL({dynamic:true}))

	

		const eğlence = new Discord.MessageEmbed()
		.setTitle("Eğlence Menüsü")
		.setDescription(`${prefix}meme : Rastgele meme atar.  \n ${prefix}yazdır : Bota bir şey yazdır. \n ${prefix}owo : OwO \n ${prefix}8ball : 8ball oynarsınız. `)
		.setColor("RANDOM")
		.setTimestamp()
		.setFooter(client.user.username,client.user.displayAvatarURL({dynamic:true}))

		

		const moderasyon = new Discord.MessageEmbed()
		.setTitle("Moderasyon Menüsü")
		.setDescription(`${prefix}sil : Mesajları belirlediğin miktar kadar siler.`)
		.setColor("RANDOM")
		.setTimestamp()
		.setFooter(client.user.username,client.user.displayAvatarURL({dynamic:true}))

		const kullanıcı = new Discord.MessageEmbed()
		.setTitle("Kullanıcı Menüsü")
		.setDescription(`${prefix}avatar : Avatarını gösterir.`)
		.setColor("RANDOM")
		.setTimestamp()
		.setFooter(client.user.username,client.user.displayAvatarURL({dynamic:true}))

	

	


		const menu = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select1')
					.setPlaceholder('Hiçbir şey seçilmedi')
					.addOptions([
						{
							label: 'Yardım',
							description: 'Yardım',
							value: 'yardım',
						},
						{
							label: 'Bot',
							description: 'Bot Yardım',
							value: 'bot',
						},
						{
							label: 'Eğlence',
							description: 'Eğlence Yardım',
							value: 'eglence',
						},
						{
							label: 'Moderasyon',
							description: 'Moderasyon Yardım',
							value: 'moderasyon',
						},
						{
							label: 'Kullanıcı',
							description: 'Kullanıcı Yardım',
							value: 'kullanıcı',
						},
					]),
			);
		const m = await message.channel.send({ embeds:[embed], components: [menu] });
	

		const collector = m.createMessageComponentCollector({filter:i=>i.user.id==message.author.id,time:60000})

		collector.on("collect",async i=>{
			if(i.values[0] == "yardım") {
				i.deferUpdate()
				m.edit({embeds:[embed]})
			}
			if(i.values[0] == "moderasyon") {
				i.deferUpdate()
				m.edit({embeds:[moderasyon]})
			}
			if(i.values[0] == "eglence") {
				i.deferUpdate()
				m.edit({embeds:[eğlence]})
			}
			if(i.values[0] == "bot") {
				i.deferUpdate()
				m.edit({embeds:[bot]})
			}
			if(i.values[0] == "kullanıcı") {
				i.deferUpdate()
				m.edit({embeds:[kullanıcı]})
			}
		})



   

	}
});
