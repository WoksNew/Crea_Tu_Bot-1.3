const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');

module.exports = async (client, message, args) => { 
name: 'help'
aliases: ['help','halp']
description: "Ayuda de Comandos"
  
  let prefix = (process.env.PREFIX)

  const embed = new MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription('Lorem, ipsum dolor sit amet consectetur adipisicing elit')
  .addFields(
    { name: `Ping | ${prefix}ping`, value: "Latencia del Bot", inline: false },
    { name: `Embed | ${prefix}embed`, value: `Embed del Bot`, inline: false },
    { name: `Botòn | ${prefix}button`, value: "Ejemplos de Botones", inline: false },
    { name: `Menù | ${prefix}menu`, value: "Ejemplos de Menù", inline: false },
    { name: `Admins | ${prefix}admins`, value: "Comando para Admins", inline: false },
    { name: `User | ${prefix}user`, value: "Comando para usuarios Especificos", inline: false },
    { name: `React | ${prefix}react`, value: "Comando para que el bot reaccione a ti con prefix", inline: false },
    { name: `Descripción | ${prefix}setDescription`, value: "Una base de datos, para poder poner una descripción personalizada", inline: false },
    { name: `Hexadecimal | ${prefix}setHex`, value: "Cambiar el color de tu Perfíl", inline: false },
    { name: `Perfíl | ${prefix}profile`, value: "Ver tu perfil en con la base de Datos de Description", inline: false },
    { name: `Test | Test`, value: "Comando para que el bot reaccione a ti sin prefix", inline: false },
  )
  .setThumbnail(client.user.avatarURL())
  .setFooter('EmbedExample', client.user.avatarURL())
  .setColor("#61a5e4")
  .setTimestamp()

  message.channel.send({ embeds: [embed] });
  
}