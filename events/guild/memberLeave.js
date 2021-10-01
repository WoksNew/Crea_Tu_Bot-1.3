module.exports = async (member) => {
  
	const channel = member.guild.channels.cache.find((ch) => ch.name === 'goodbye'); //Aquí se enviara al canal con el nombre "goodbye", Cuando alguien se salga
	if (!channel) return;

	channel.send(`${member} Se fue del servidor, Ahora somos ${member.guild.memberCount} usuarios`); // Cuando un miembro se salga aparecera un mensaje de salida

  /*También si quieres hacerlo para ti solo, o para personas (base de datos), podria ser asi

    client.channels.cache.get(* Id de tu canal, o de la variable *).send({ content: `${member} Se fue del servidor, Ahora somos ${member.guild.memberCount} usuarios`})
  
  */

};