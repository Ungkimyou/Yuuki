exports.run = (message) =>require('./utils/embed')(message.client, 'girlSoloGif', message.channel.nsfw).then(res => message.channel.send(res)).catch(err => {message.channel.send(`Whoops, something happened... ${err}`)});

exports.desc = 'this isnt what it looks like mom';