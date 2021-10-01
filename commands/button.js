const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');

module.exports = async (client, message, args) => {
name: 'button'
aliases: ['button']
description: "Comando con Botones"
  
  const start = new MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription('Botones de ejemplo para tu Bot')
  .setColor('#03fcb1')
  .setTimestamp()
const button = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Botón 1')
					.setStyle('PRIMARY'),
			)
      .addComponents(
				new MessageButton()
					.setCustomId('secondary')
					.setLabel('Botón 2')
					.setStyle('SECONDARY'),
			)
      .addComponents(
				new MessageButton()
					.setCustomId('success')
					.setLabel('Botón 3')
					.setStyle('SUCCESS'),
			)
      .addComponents(
				new MessageButton()
					.setCustomId('danger')
					.setLabel('Botón 4')
					.setStyle('DANGER'),
			)
      .addComponents(
				new MessageButton()
					.setURL('https://n9.cl/ctb13')
					.setLabel('Botón link')
					.setStyle('LINK'),
			)
      const button2 = new MessageActionRow() //Este es otro, por que el maximo son 5 botones
      	.addComponents(
				new MessageButton()
          .setCustomId('disabled')
					.setLabel('Botón desabilitado')
					.setStyle('SECONDARY')
          .setDisabled(true)
			);
      message.reply({ embeds: [start], components: [button,button2]}).then(async(m) => {

      const collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id });
      collector.on("collect", async(i) => {
        if(i.customId === "primary"){
          i.update({ embeds: [primary] })
        }
        if(i.customId === "secondary"){
          i.update({ embeds: [secondary] })
        }
        if(i.customId === "success"){
          i.update({ embeds: [success] })
        }
        if(i.customId === "danger"){
          i.update({ embeds: [danger] })
        }
      })

    const primary = new MessageEmbed() 
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription('El botón azul fue seleccionado!')
    .setColor('#0366fc')
    .setTimestamp()

    const secondary = new MessageEmbed() 
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription('El botón gris fue seleccionado!')
    .setColor('#c1c3c7')
    .setTimestamp()

    const success = new MessageEmbed() 
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription('El botón verde fue seleccionado!')
    .setColor('#37db73')
    .setTimestamp()

    const danger = new MessageEmbed() 
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription('El botón rojo fue seleccionado!')
    .setColor('#db3745')
    .setTimestamp()

})

}