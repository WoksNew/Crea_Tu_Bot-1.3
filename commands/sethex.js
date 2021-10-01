const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');
const db = require('megadb')

module.exports = async (client, message, args) => {
name: 'setdescription'
aliases: ['set']
description: "Cambiar la Descripción de tu Biografía" 

try{
const hex = new db.crearDB('hex')
let hexadecimal = await hex.obtener(`${message.author.id}.hexadecimal`)

 let rgb = args.join(" ")

    hex.establecer(`${message.author.id}.hexadecimal`, rgb)
    if (rgb.length < 3) return message.channel.send(`❌ Tu hexadecimal ${rgb} es menor a 3 caracteres`)
    if (rgb.length > 7) return message.channel.send(`❌ Tu hexadecimal ${rgb} es mayor a los 7 carácteres`)
    if(!rgb) return message.reply('❌ Mensaje sin contenido!')
    
    message.reply(`" ${args.join(" ")} " ✅`);

}catch(err){(err)}

}