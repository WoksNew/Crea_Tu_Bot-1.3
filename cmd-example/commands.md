## Ejemplo para cada comando

```js 
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js'); //Variables por si quieres usar Embeds/Botones...
const megadb = require('megadb') // Variable para hacer base de datos


module.exports = async (client, message, args) => { //El uso del handler (La caja), Donde iran todos los comandos
name = 'hola', //El nombre del Handler
aliases = ['hola','hello'], //Otras maneras que puede ser el comando
description = "Comando de saludo a las personas" //Descripción de lo que hace el comando

  /// Los comandos aquí

} //El cierre de la caja del comando del handler
```