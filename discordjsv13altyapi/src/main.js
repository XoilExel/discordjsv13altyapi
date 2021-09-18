/** @format */

console.clear();

const Client = require("./Structures/Client.js");

const config = require("./Data/config.json");

const client = new Client();



/*client.on('interactionCreate', interaction => {
    if (!interaction.isButton()) return;
    interaction.deferUpdate();
    interaction.channel.send(`${interaction.user.tag} buttona tıkladı.`)
});*/




client.start(config.token);
