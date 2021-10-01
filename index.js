//DiscordJs13
const express = require('express');
const app = express();
const port = 3000;
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/Thanks.html');
});app.listen(port, () => console.log('El bot ha sido conectado sin fallos'));

const Discord = require('discord.js')
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js');
let { readdirSync } = require('fs'); 
client.config = require('./config.js'); 
client.comandos = new Discord.Collection();
//Prefix del bot, Se encuentra en el Candado de la izquierda, Y crea una key del nombre "PREFIX"
//y dentro del value le pones el prefix de tu Bot
let prefix = (process.env.PREFIX);

// Lista de Comandos (No borrar)
for(const file of readdirSync('./commands/')) { 
  if(file.endsWith(".js")) { 
  let fileName = file.substring(0, file.length - 3); 
  let fileContents = require(`./commands/${file}`); 
  client.comandos.set(fileName, fileContents);}}

// Lista de Eventos (No Borrar)
for(const file of readdirSync('./events/')) {
  if(file.endsWith(".js")){
  let fileName = file.substring(0, file.length - 3); 
  let fileContents = require(`./events/${file}`); 
  client.on(fileName, fileContents.bind(null, client));}}

// Lista de Eventos para salida y entrada  (No borrar)
  for(const file of readdirSync('./events/guild/')) { 
  if(file.endsWith(".js")){
  let fileName = file.substring(0, file.length - 3); 
  let fileContents = require(`./events/guild/${file}`); 
  client.on(fileName, fileContents.bind(null, client));}}

client.on('messageCreate', async message => {
if(message.content.toLowerCase().startsWith('test')){message.react('😄');}
if(message.content.toLowerCase().startsWith('woks')){message.react('😄');}
});

client.on('guildMemberAdd', async (member) => {
	await require('./events/guild/memberJoin')(member);
});

client.on('guildMemberRemove', async (message) => {
	await require('./events/guild/memberLeave')(message);
});

//Si hay un error en el Token, Busca el el candado a la izquierda, Y en 
//donde dice TOKEN, haces clic y pones tu Token dentro de allì
client.login(process.env.TOKEN);

//Creado por: Woks#6231