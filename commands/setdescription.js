const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');
const db = require('megadb')

module.exports = async (client, message, args) => { 
name: 'setdescription'
aliases: ['set']
description: "Cambiar la Descripción de tu Biografía"
  
const descrp = new db.crearDB('descrp')
let description = await descrp.obtener(`${message.author.id}.description`)

 let text = args.join(" ")

    descrp.establecer(`${message.author.id}.description`, text)

    if(!text) return message.reply('❌ Mensaje sin contenido!, Escribe algo')

    message.reply(`La descripción " **${args.join(" ")}** " fue guardada ✅`);
    
}