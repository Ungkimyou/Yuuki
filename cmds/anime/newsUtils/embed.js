const malScraper = require('mal-scraper');

module.exports = async (client) => {
    const res = await malScraper.getNewsNoDetails(20);

    let pages = [];
    res.forEach(e =>{
        pages.push(client.embedBuilder().setThumbnail(e.image)
        .setTitle(e.title)
        .setDescription(`${e.link}\n\`${e.text}\``));
    });

    return pages;
}