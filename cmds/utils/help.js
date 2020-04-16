const helpEmbeds = require('./helpUtils/embed');

exports.run = (message, args) =>{
    
    const categories = Array.from(new Set(message.client.commands.map(v => v.info.category)));
    
    if(categories.indexOf(args[1]) === -1) return message.channel.send({embed: helpEmbeds.genericHelp(message.client, categories)});

    message.channel.send({embed: helpEmbeds.categoryHelp(message.client, args)});

}

exports.desc = 'View bot commands';