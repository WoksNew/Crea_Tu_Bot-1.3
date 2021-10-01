const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');

module.exports = async (client, message, args) => {
name: 'ping'
aliases: ['ping','pong']
description: "Comando test para enviar Mensajes"
  
  message.reply({ content: `Pong! 🏓 | Ping: ${Date.now()-message.createdTimestamp}ms`});

}