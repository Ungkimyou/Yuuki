const nekoClient = require('nekos.life'),
neko = new nekoClient();

module.exports = async (client, arg, nsfw) =>{
    try{
        if(!nsfw) return client.embedBuilder().setDescription('⚠️ Use NSFW commands in a NSFW channel');
        const img = await neko.nsfw[arg]();
        return client.embedBuilder().setImage(img.url);
    }
    catch(err){
        console.error(err);
        return err;
    }
}