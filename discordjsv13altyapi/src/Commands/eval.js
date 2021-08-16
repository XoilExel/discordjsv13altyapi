const Discord = require('discord.js')
const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "eval",
	description: "Eval komut denemeye yarar.",
	async run(message, args, client) {

        if(message.author.id !== "İDNİZ") return
    
            try{
                var evaled=eval(args.slice(1).join(" "));
        
                
                const a = new Discord.MessageEmbed()
                .addField('Giriş:', args.slice(1).join(" ")!=""?args.slice(1).join(" "):"_ _")
                .addField("Çıkış","```js\n"+evaled+ "```")
                message.channel.send({embeds:[a]});
            }
            catch (error) {
                
                const b = new Discord.MessageEmbed()
                .addField('Giriş:', args.slice(1).join(" ")!=""?args.slice(1).join(" "):"_ _")
                .addField("Çıkış","```js\n"+error.name+ "```")
                message.channel.send({embeds:[b]});
            }

	}
});