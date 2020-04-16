const malScraper = require('mal-scraper'),
    newsEmbed = require('./newsUtils/embed');

exports.run = async (message) => {

    const max = 20;
    let page = 1;

    try {
        const res = await malScraper.getNewsNoDetails(max),
        msg = await message.channel.send({ embed: newsEmbed(res, page, max, message) });

        await msg.react('◀');
        await msg.react('▶');

        const filter = (reaction, user) => (reaction.emoji.name === '◀' || reaction.emoji.name === '▶') && user.id === message.author.id,
        collector = msg.createReactionCollector(filter, { time: 300000 });

        collector.on('collect', reaction => {
            reaction.users.remove(message.author.id).catch(() => { });

            if (reaction.emoji.name === '◀' && page > 1) page -= 1;
            if (reaction.emoji.name === '▶' && page < max) page += 1;
            msg.edit(newsEmbed(res, page, max, message));

        });

        collector.on('end', () => msg.edit(newsEmbed(res, page, max, message).setFooter(`Pagination Timeout. Please use the news command again to read more news`)));
    }
    catch (err) {
        message.channel.send('Oops, something went wrong...')
        console.error(err);
    }
}

exports.desc = 'Anime news from MAL'