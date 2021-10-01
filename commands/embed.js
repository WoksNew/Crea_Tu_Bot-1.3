const config = require ("../config.js")
const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');

module.exports = async (client, message, args) => {
name: 'embed'
aliases: ['embed']
description: "Comando Embed"

  const embed = new MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL(), "https://discord.gg/9YUjDNvyZn" )
  .setDescription('Lorem, ipsum dolor sit amet consectetur adipisicing elit')
  .addFields(
    { name: 'Lorem1', value: 'Example1', inline: true },
    { name: 'Lorem2', value: 'Example2', inline: true },
    { name: 'Lorem3', value: 'Example3', inline: true },
    { name: 'Lorem4', value: 'Example4', inline: true },
    { name: 'Lorem5', value: 'Example5', inline: true },
    { name: 'Lorem6', value: 'Example6', inline: true },
  )
  .addField('Textos en cascada', 'Texto Abajo \n Texto abajo \n Texto Abajo', false)
  .setThumbnail(client.user.avatarURL())
  .setFooter('EmbedExample', client.user.avatarURL())
  .setColor("#61a5e4")
  .setTimestamp()

  message.channel.send({ embeds: [embed] });
}