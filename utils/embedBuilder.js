const Discord = require('discord.js');
const embedColor = require('../config.json').ops.embedColor;

module.exports = () =>{
    return new Discord.MessageEmbed().setColor(embedColor);
}