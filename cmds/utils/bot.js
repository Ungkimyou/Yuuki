exports.run = (message) => message.channel.send({ embed: require('./botUtils/embed')(message.client) });

exports.desc = 'View bot information';