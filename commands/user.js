const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');

module.exports = async (client, message, args) => {
name: 'user'
aliases: ['user']
description: "Comando solo para users Especificos"

  if (message.author.id !== "777367944882552882") return message.reply({ content:"❌ Este comando no puedes usarlo por tu Id" });

  message.reply({ content: "Comando solo para usuarios especificos ✅"})

}

