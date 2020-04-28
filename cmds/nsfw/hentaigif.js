exports.run = (message) =>require('./utils/embed')(message.client, 'randomHentaiGif', message.channel.nsfw).then(res => message.channel.send(res)).catch(err => {message.channel.send(`Whoops, something happened... ${err}`)});

exports.desc = 'Hentai GIFs are amazing';