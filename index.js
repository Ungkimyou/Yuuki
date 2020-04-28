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
client.paginate = require('./utils/paginate');

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


//#region 
//EVAL  

/*
client.on('message', message =>{
    
    if(message.author.id !== client.owner) return;

    const clean = text => {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      }

    try {
        let evaled = eval(args.splice(1).join(' '));
        if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
  
        message.channel.send(clean(evaled), {code:"js"});
    } catch (err) {message.channel.send(`:warning: __**\`Eval Command Execution Failed.\`**__\`\`\`js\n${clean(err)}\n\`\`\``);}
});*/


//#endregion

client.login(config.token);