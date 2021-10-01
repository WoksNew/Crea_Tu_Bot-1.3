const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');

module.exports = async (client, message, args) => { 
name: 'admins'
aliases: ['admins']
description: "Comando solo para Admins"

  if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply({ content: "❌ Este comando es solo para Admins" });

  message.reply({ content: "Comando solo para admins! ✅"})

}