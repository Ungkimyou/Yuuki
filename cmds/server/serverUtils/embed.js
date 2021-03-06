module.exports = (guild, message) => {

    const guildName = guild.name,
        guildRegion = guild.region,
        guildIcon = guild.iconURL(),
        guildTierLvl = guild.premiumTier,
        guildSubCount = guild.premiumSubscriptionCount,
        guildOwner = guild.owner.user.username + '#' + guild.owner.user.discriminator;

        guildMembers = guild.members.cache.size,
        users = guild.members.cache.filter(m => m.user.bot === false).size,
        bots = guild.members.cache.filter(m => m.user.bot === true).size

        emojis = guild.emojis.cache.size,
        roles = guild.roles.cache.size,

        chan = guild.channels.cache.size,
        chanTxt = guild.channels.cache.filter(c => c.type === 'text').size,
        chanVC = guild.channels.cache.filter(c => c.type === 'voice').size,
        chanCategory = guild.channels.cache.filter(c => c.type === 'category').size;


    return message.client.embedBuilder()
        .setTitle(guildName)
        .setDescription(`š Owner: \`${guildOwner}\` <@${guild.owner.user.id}>`)
        .setColor(message.client.embedColor)
        .setThumbnail(guildIcon)
        .addField('\u200B', `
        š Region: \`${guildRegion}\` | šŗ Boosts: \`Level ${guildTierLvl} (${guildSubCount} boosts)\`\n\n
        š Custom Emotes: \`${emojis}\` (${message.client.prefix}emotes) | š Roles: \`${roles}\` (${message.client.prefix}roles)\n\nšØāš©āš¦ Members: \`${guildMembers}\` | šāāļø Users: \`${users}\` | š¤ Bots: \`${bots}\`\n\n
        #ļøā£ Channels: \`${chan}\` | š¬ Text: \`${chanTxt}\` | š Voice: \`${chanVC}\` | š³ļø Categories: \`${chanCategory}\``)
        .setFooter(`Server created on ${guild.createdAt.toString().split(' ').slice(0, 4).join(' ')}`);
}