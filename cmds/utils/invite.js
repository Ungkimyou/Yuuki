exports.run = (message) =>{
    message.channel.send({embed: message.client.embedBuilder().setDescription(`**Bot Invite:** [Click here to invite Yuuki to your server](${message.client.botInvite})\n**Click here to join Yuuki's Discord Server:** ${message.client.discordInvite}`)});
}

exports.desc = 'Bot invite'