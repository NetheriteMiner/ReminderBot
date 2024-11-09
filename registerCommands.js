const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const token = process.env.TOKEN
const CLIENT_ID = process.env.CLIENT_ID

const commands = [
	{
		name: 'latency',
		description: 'Attempts to find delay between discord and the bot'
	}
];

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationCommands(CLIENT_ID),
			{ body: commands }
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
