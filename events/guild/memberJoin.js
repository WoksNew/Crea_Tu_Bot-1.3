module.exports = async (member) => {

	const channel = member.guild.channels.cache.find((ch) => ch.name === 'welcome'); //Aquí se enviara al canal con el nombre "welcome", cuando alguien se una
	if (!channel) return;

	channel.send({ content: `${member} Bienvenido, Contigo somos ${member.guild.memberCount} usuarios!` }); //Cuándo un miembro se una aparecera un mensaje de bienvenida

  /*También si quieres hacerlo para ti solo, o para personas (base de datos), podria ser asi

    client.channels.cache.get(* Id de tu canal, o de la variable *).send({ content: `${member} Bienvenido, Contigo somos ${member.guild.memberCount} usuarios!`})
  
  */

};