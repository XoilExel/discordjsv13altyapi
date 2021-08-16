/** @format */

const Event = require("../Structures/Event.js");
const config = require("../Data/config.json");

module.exports = new Event("ready", client => {
	client.user.setActivity(`${config.prefix}yardım`)
	console.log(`${client.user.username} Aktif`);
});
