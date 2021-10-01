module.exports = (client, message) => { 

//No tocar, esto no se modifica

  if(!message.content.toLowerCase().startsWith(client.config.prefix)) return; 
  if(message.author.bot) return;
  if (message.channel.type === "dm") return;
  const args = message.content.slice(client.config.prefix.length).trim().split(/\s+/g);  
  const command = args.shift().toLowerCase()
  let cmd = client.comandos.get(command); 
  if(!cmd) return; 
  cmd(client, message, args);

}