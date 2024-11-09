export async function execute(interaction, client) {
	interaction.reply({content: `${Date.now() - interaction.createdTimestamp}ms`, ephemeral: true});
}
