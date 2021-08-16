const Discord = require('discord.js')
const Command = require("../Structures/Command.js");


module.exports = new Command({
	name: "i",
	description: "Botun istatistiklerini gösterir.",
	async run(message, args, client) {

		function duration(ms) {
            const sec = Math.floor(ms / 1000 % 60).toString();
            const min = Math.floor(ms / (60*1000) % 60).toString();
            const hrs = Math.floor(ms / (60*60*1000) % 60).toString();
            const days = Math.floor(ms / (24*60*60*1000) % 60).toString();
            return `${days} Gün ${hrs} Saat ${min} Dakika ${sec} Saniye`
        }
		
		const embed = new Discord.MessageEmbed()
		.addField('Sunucular', `${client.guilds.cache.size}`)
		.addField('Kanallar', `${client.channels.cache.size}`)
		.addField('Discord.js', `${Discord.version}`)
		.addField('Ping', `${client.ws.ping}`)
		.addField("Çalışma Süresi",`${duration(client.uptime)}`)
		.setColor("RANDOM")
		.setTimestamp()
		message.channel.send({embeds:[embed]})

	}
});
