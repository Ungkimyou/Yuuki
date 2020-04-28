exports.run = (message) => require('./utils/embed')(message.client, 'trap', message.channel.nsfw).then(res => message.channel.send(res)).catch(err => {message.channel.send(`Whoops, something happened... ${err}`)});

exports.desc = '"Nyaaa~~ Master, I havwe a swurpwrise 4 u!!~~ c:"';