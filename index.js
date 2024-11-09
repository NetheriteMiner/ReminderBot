import { Client, Events, GatewayIntentBits } from 'discord.js';
import { startReminders } from './commands/reminders.js'
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const token = process.env.TOKEN
process.on('uncaughtException', function(err) {
    console.log('Uncaught Error:\n'+err);
})

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
	startReminders(client)
});

client.on('interactionCreate', async interaction => {
	if (interaction.type === 2) {
		import(`./commands/${interaction.commandName}.js`).then((command) => {
            command.execute(interaction, client)
        })
	}
});

client.login(token);
