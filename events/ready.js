module.exports = (client, message) => {

  let prefix = (process.env.PREFIX);

   const presence = [
  {
    name:  `Estoy en ${client.guilds.cache.size} Servidores!`, //El mensaje 1
    type: 'PLAYING' //El tipo de mensaje del 1
  },
  {
    name:  `Nuestro discord: https://discord.gg/9YUjDNvyZn`, //El mensaje 2
    type: 'PLAYING' //El tipo de mensaje del 2
  },
  {
    name:  `Mi prefix es ${prefix}`, //El mensaje 3
    type: 'PLAYING' //El tipo de mensaje del 3
  },
  ]

  const random = presence[Math.floor(Math.random() * presence.length)]

  setInterval(() => {
    function presence() {
      client.user.setPresence({
        activities: [random],
        status: `online` //El estado del bot, Existen muchos, por ejemplo "dnd,online,idle"
      })
    }
      presence()
   }, 4000)
  console.log('📌 |',`\x1b[34mNombre:\x1b[0m`,`\x1b[31m${client.user.tag}\x1b[0m`);
  console.log('🔥 |',`\x1b[34mServidores:\x1b[0m`,`\x1b[31m${client.guilds.cache.size}\x1b[0m`);
  console.log('🔧 |',`\x1b[34mPrefix:\x1b[0m`,`\x1b[31m${prefix}\x1b[0m`);
  console.log('🎁 |',`\x1b[34mComandos:\x1b[0m`,`\x1b[31m${client.comandos.size}\x1b[0m`);
  console.log('🎲 |',`\x1b[34mEstado:\x1b[0m`,`\x1b[31mConectado\x1b[0m`);
  console.log('💎 |',`\x1b[34mInvitación:\x1b[0m`,`\x1b[31mhttps://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8\x1b[0m`);

  try{
  message.channels.cache.get('889042023204663311').send({ content: "El bot ha sido conectado correctamente"})
        //Aquí va la id del canal, por si quieres avisar cuando el bot se conecte
  }catch(err){(err)}
}