module.exports = (client, message) =>{
    if(message.author.bot || !message.content.toLowerCase().startsWith(client.prefix)) return;

    const args = message.content.toLowerCase().split(client.prefix)[1].split(' ').filter(v => v!== '');
    const cmd = args[0];

    if(!client.commands.has(cmd)) return;

    if(!message.guild.me.hasPermission('EMBED_LINKS')) return message.channel.send('⚠️ I am missing `Embed Links` permissions');

    console.log(`USER ${message.author.username} (${message.author.id}) | COMMAND ${cmd} | SERVER ${message.guild.name} (${message.guild.id}) | CHANNEL ${message.channel.name} (${message.channel.id}) | DATE ${Date(Date.now()).split(' ').slice(0, 5).join(' ')}\n`);

    try{
        client.commands.get(cmd).exec.run(message, args, client);
    } 
    
    catch(err) {
        message.channel.send(`❌ \`Oops, something broke... You can report this to Kai#6119 in \`${message.client.discordInvite}\n\`\`\`js\n${err}\`\`\``);
        console.error(`ERR:\n${err}`);
    }
}