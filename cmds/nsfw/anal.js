exports.run = (message) => require('./utils/embed')(message.client, 'anal', message.channel.nsfw).then(res => message.channel.send(res)).catch(err => {message.channel.send(`Whoops, something happened... ${err}`)});

exports.desc = 'NASA wants to probe Uranus in search of gas';