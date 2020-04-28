exports.run = (message) =>require('./utils/embed')(message.client, 'femdom', message.channel.nsfw).then(res => message.channel.send(res)).catch(err => {message.channel.send(`Whoops, something happened... ${err}`)});

exports.desc = 'Female domination. What else can I say?';