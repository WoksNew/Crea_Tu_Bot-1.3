const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');
const db = require('megadb')

module.exports = async (client, message, args) => { 
name: 'profile'
aliases: ['profile','perfil']
description: "Ver tu perfil"

try{

let user =  message.mentions.users.first() || message.author;
const descrp = new db.crearDB('descrp')
let description = await descrp.obtener(`${user.id}.description`)
const hex = new db.crearDB('hex')
let hexadecimal = await hex.obtener(`${user.id}.hexadecimal`)

const profile = new MessageEmbed()

  .setAuthor(client.user.username, client.user.avatarURL())
.setDescription(`**Descripción:** ${description ? description.toLocaleString() : "No hay biografia :c"}`)
.addFields(
    { name: 'Nombre:', value: `${user.tag}`, inline: true },
    { name: 'Fecha de Creación:', value: `${user.createdAt.toLocaleDateString()}`, inline: true },
    { name: 'Hexadecimal:', value: hexadecimal ? hexadecimal : `Sin color definido`, inline: true }
)
.setColor(hexadecimal ? hexadecimal : `NOT_QUITE_BLACK`)
.setThumbnail(user.avatarURL({dynamic: true, size: 128}))
.setTimestamp()
.setFooter(`Perfil de ${user.username}`, client.user.avatarURL())    

message.reply({ embeds: [profile] })

}catch(err){
let user =  message.mentions.users.first() || message.author;
const descrp = new db.crearDB('descrp')
let description = await descrp.obtener(`${user.id}.description`)
const hex = new db.crearDB('hex')
let hexadecimal = await hex.obtener(`${user.id}.hexadecimal`)
const error = new MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setDescription(`**Descripción:** ${description ? description.toLocaleString() : "No hay biografia"}`)
.addFields(
    { name: 'Nombre:', value: `${user.tag}`, inline: true },
    { name: 'Fecha de Creación:', value: `${user.createdAt.toLocaleDateString()}`, inline: true },
    { name: 'Hexadecimal:', value: `Sin color definido`, inline: true },
)
.setColor(`NOT_QUITE_BLACK`)
.setThumbnail(user.avatarURL({dynamic: true})) 
.setFooter(`Perfil de ${user.username}`, client.user.avatarURL())    
message.reply({ content: `❌ El color declarado " **${hexadecimal}** ", no existe`, embeds: [error] });(err)}

}