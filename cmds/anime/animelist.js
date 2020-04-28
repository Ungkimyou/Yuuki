exports.run = async (message, args) =>{
    const user = args[1], listType = args[2];
    const pages = await require('./animelistUtils/getUserList')(user, listType, message.client);

    message.client.paginate(message, pages, 3);
}

exports.desc = 'View users\' anime list on MAL';