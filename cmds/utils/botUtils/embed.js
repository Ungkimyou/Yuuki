const moment = require('moment'),
os = require('os');

module.exports = (client) =>{
    const duration = moment.duration(client.uptime, 'milliseconds'),
        uptime = `${duration.hours()}H ${duration.minutes()}M ${duration.seconds()}S`;

    return client.embedBuilder()
        .addField('Guilds', `${client.guilds.cache.size}`, true)
        .addField('Users', `${client.users.cache.size}`, true)
        .addField('Bot Uptime', `${uptime}`, true)
        .addField('Host Uptime', `${Math.round(100 * (os.uptime / 86400) / 100)} Days`, true)
        .addField('Memory', `${Math.round(100 * (os.freemem / 1000000000) / 100)}GBs / ${Math.round(100 * (os.totalmem / 1000000000) / 100)}GBs`, true)
        .addField('Operating System', `${os.type} ${os.release} ${os.arch}`, true)
        .setColor(client.embedColor);
}