
const Command = require("../Structures/Command");
const { Permissions } = require('discord.js');
module.exports = new Command({
	name: "sil",
	description: "Mesajları belirlediğin miktar kadar siler.",
	type: "BOTH",
	permission: "MANAGE_MESSAGES",
	async run(message, args, client) {

        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) return message.channel.send("Üzgünüm ama bu komutu kullana bilmek için **Mesajları Yönet** yetkisine sahip olman lazım.")


		const amount = args[1];
		if (!amount || isNaN(amount))
			return message.reply("Sayı girmelisin.")

		const amountParsed = parseInt(amount);

		if (amountParsed > 100)
			return message.reply("Tek seferde en fazla 100 mesaj silebilirsin.");

		message.channel.bulkDelete(amountParsed);

		const msg = await message.reply(
			`${amountParsed} mesaj silindi!`
		);

		

		if (msg) setTimeout(() => msg.delete(), 3000);
	}
});