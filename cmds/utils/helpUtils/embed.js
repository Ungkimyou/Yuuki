module.exports.genericHelp = (client, categories) =>{
    return client.embedBuilder().setTitle('Help Commands').setDescription(`Use **\`${client.prefix}help {category}\`** to view bot commands.\n\n**Categories**\n\`\`\`css\n${categories.join(', ')}\`\`\`\nDiscord Server: https://discord.gg/A2ecfAR`).setThumbnail(client.user.avatarURL());
}

module.exports.categoryHelp = (client, args) =>{
    let help = new Map();
    for(let i = 0; i < client.commands.filter(v => v.info.category === args[1]).size; i++){
        const name = client.prefix + client.commands.filter(v => v.info.category === args[1]).map(v => v.info.name)[i];
        const desc = client.commands.filter(v => v.info.category === args[1]).map(v => v.info.desc)[i];

        help.set(name, desc);
    }
        
    let helpEmbed = client.embedBuilder().setTitle(`${args[1].charAt(0).toUpperCase() + args[1].substr(1)} Commands`).setDescription('');

    help.forEach((v,k) => helpEmbed.description += k + ` - \`${v}\`\n`);

    return helpEmbed;
}