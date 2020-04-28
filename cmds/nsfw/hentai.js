exports.run = (message) => require('./utils/embed')(message.client, 'hentai', message.channel.nsfw).then(res => message.channel.send(res)).catch(err => {message.channel.send(`Whoops, something happened... ${err}`)});

exports.desc = 'Just some hentai pics for your own viewing pleasure';