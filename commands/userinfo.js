module.exports = {
	name: 'userinfo',
	description: 'Display info about yourself.',
	execute(message) {
		message.channel.send(`**Username:** ${message.author.username}\n** **ID:** ${message.author.id}`);
		message.channel.send('``Moderations:``');
		message.channel.send('Bans:\n Warns:\n Mutes:\n');
	},
};
