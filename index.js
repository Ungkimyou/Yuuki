const Discord = require('discord.js'),
client = new Discord.Client();
config = require('./config.json');
fs = require('fs'),

client.prefix = config.prefix;
client.owner = config.owner;
client.embedColor = config.ops.embedColor;
client.discordInvite = config.discordInvite;
client.botInvite = config.botInvite;
client.embedBuilder = require('./utils/embedBuilder');

require('./events/eventLoader')(client);

client.commands = new Discord.Collection;

fs.readdirSync('./cmds').forEach(cmdDir =>{
    fs.readdirSync(`./cmds/${cmdDir}`).filter(file => file.endsWith('.js')).forEach(cmd =>{
        client.commands.set(cmd.split('.js')[0], {
            exec: require(`./cmds/${cmdDir}/${cmd}`),
            info: {
                category: cmdDir,
                name: cmd.split('.js')[0],
                desc: require(`./cmds/${cmdDir}/${cmd}`).desc
            }
        });
        console.log(`Loaded ${cmd}`);
    });
});

client.login(config.token);