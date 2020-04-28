exports.run = (message) => require('./utils/embed')(message.client, 'yuri', message.channel.nsfw).then(res => message.channel.send(res)).catch(err => {message.channel.send(`Whoops, something happened... ${err}`)});

exports.desc = 'Forbidden love but I shall allow it - God';