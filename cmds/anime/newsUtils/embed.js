const Discord = require('discord.js');

module.exports = (res, page, max, message) => {
    return new Discord.MessageEmbed()
    .setColor(message.client.embedColor)
    .setThumbnail(res[page - 1].image)
    .setTitle(res[page - 1].title)
    .setDescription(`${res[page - 1].link}\n\`${res[page - 1].text}\``)
    .setFooter(`Page ${page}/${max}`);
}