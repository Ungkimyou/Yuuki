exports.run = async (message) => {
    const pages = await require('./newsUtils/embed')(message.client);
    
    message.client.paginate(message, pages, 3);
}

exports.desc = 'Anime news from MAL';