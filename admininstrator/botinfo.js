module.exports = {
	name: 'binfo',
	description: '[Bot Owner] provides bot info and other things.',
	execute(client, message) {

		//		const adminIDS = require('./adminfile.json');
		//	const devID = (206899038451138562);

		// const MessageEmbed = require('discord.js');

		// if(message.GuildMember.author.id == devID) {


		const embed = new MessageEmbed()
			.setColor(0xff0000)
			.setDescription('Developer Info')
			.addField('Uptime ', 'Operational')
			.addField('Moderations ', 'SQL Server Unavailable')
			.addField('General Status', 'Completely Operational');

		message.channel.send(embed);
	},

	// if(!message.GuildMember.author.id !== devID) {return message.reply('Sorry chief! Can\'t run that command!');}

	//		if(message.GuildMember.author.id == adminID) {return message.reply('contact the Developer for a permissions upgrade.');}


};
