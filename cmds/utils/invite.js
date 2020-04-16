exports.run = (message) =>{
    message.channel.send({embed: message.client.embedBuilder().setDescription(`**Bot Invite:** [Link](${message.client.botInvite})\n**Discord Server:** ${message.client.discordInvite}`)});
}

exports.desc = 'Bot invite'