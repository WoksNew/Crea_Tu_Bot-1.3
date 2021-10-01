const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');

module.exports = async (client, message, args) => {
name: 'react'
aliases: ['react']
description: "Mensaje para que el bot reaccione a ti"

message.react('👍');

}