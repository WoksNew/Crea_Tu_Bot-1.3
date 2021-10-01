const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');

module.exports = async (client, message, args) => {
name: 'menu'
aliases: ['menu']
description: "Menú de cosas"
  
    const start = new MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL(), "https://discord.gg/9YUjDNvyZn" )
    .setDescription('Lorem, ipsum dolor sit amet consectetur adipisicing elit')
    .addField('Menù:', 'Menù de comandos', false)
    .setThumbnail(client.user.avatarURL())
    .setFooter('EmbedExample', client.user.avatarURL({ size: 128 }))
    .setColor("#61a5e4")
    .setTimestamp()

      const row = new MessageActionRow()
        .addComponents(
          new MessageSelectMenu()
          .setCustomId('Select')
          .setPlaceholder('Selecciona un Comando')
          .addOptions([
              {
                  label: 'Comando 1',
                  description: 'Descripciòn del comando 1',
                  value: 'test1',
                  emoji: '😄',
              },
              {
                  label: 'Comando 2',
                  description: 'Descripciòn del comando 2',
                  value: 'test2',
                  emoji: '😄',
              },
              {
                  label: 'Comando 3',
                  description: 'Descripciòn del comando 3',
                  value: 'test3',
                  emoji: '😄',
              },
              ]),
        )
      message.reply({ embeds: [start], components: [row]}).then(async(m) => {

      const collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id });
      collector.on("collect", async(i) => {
        if(i.values[0] === "test1"){
          i.update({ embeds: [test1] })
        }
        if(i.values[0] === "test2"){
          i.update({ embeds: [test2] })
        }
        if(i.values[0] === "test3"){
          i.update({ embeds: [test3] })
        }
      })

    const test1 = new MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL(), "https://discord.gg/9YUjDNvyZn" )
    .setDescription(`Este es el menú número 1 ✅`)
    .setThumbnail(client.user.avatarURL())
    .setFooter('EmbedExample', client.user.avatarURL({ size: 128 }))
    .setColor("#61a5e4")
    .setTimestamp()

    const test2 = new MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL(), "https://discord.gg/9YUjDNvyZn" )
    .setDescription(`Este es el menú número 2 ✅`)
    .setThumbnail(client.user.avatarURL())
    .setFooter('EmbedExample', client.user.avatarURL({ size: 128 }))
    .setColor("#61a5e4")
    .setTimestamp()

    const test3 = new MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL(), "https://discord.gg/9YUjDNvyZn" )
    .setDescription(`Este es el menú número 3 ✅`)
    .setThumbnail(client.user.avatarURL())
    .setFooter('EmbedExample', client.user.avatarURL({ size: 128 }))
    .setColor("#61a5e4")
    .setTimestamp()

})

}