const mal = require('node-myanimelist').Mal;
module.exports = async (user, listType, client) => {
    
    if ((!listType || !user) || !['all', 'watching', 'completed', 'onhold', 'dropped', 'plantowatch'].includes(listType)) return [client.embedBuilder()
        .setTitle(`Command usage`)
        .setDescription(`\`${client.prefix}animelist {valid MAL username} {list type options}\`\n**List type options:** \`all, completed, watching, onhold, dropped, plantowatch\``)];

    let userObj = mal.user(user);

    try {

        let pfp = await userObj.profile();
        pfp = pfp.data.image_url || null;

        let res = await userObj.animelist()[listType]();
        res = res.data.anime;

        if (listType === 'onhold') listType = 'on-hold';
        else if (listType === 'plantowatch') listType = 'plan to watch';

        let pages = [embed(client, listType, res.length, user, pfp)];

        res.forEach(e => {
            const title = (listType === 'watching' || listType === 'on-hold' || listType === 'dropped') ? `🔹\`${e.title}\` *${e.watched_episodes || 0}/${e.total_episodes || '-'} eps*\n` : `🔹\`${e.title}\`\n`;
            if (pages[pages.length - 1].description.length + title.length >= 2048) pages.push(embed(client, listType, res.length, user, pfp));
            pages[pages.length - 1].description += title;
        });

        return pages;

    }
    catch (err) {
        console.log(err);
        return [client.embedBuilder().setTitle(`⚠️ No MAL user found`)];
    }
}

const embed = (client, listType, length, user, pfp) =>{
    return client.embedBuilder()
    .setDescription(`**[${user}'s animelist](https://myanimelist.net/animelist/${user})**\n\n`)
    .addField(listType.charAt(0).toUpperCase() + listType.substr(1), length + ' animes')
    .setThumbnail(pfp);
}