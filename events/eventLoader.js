module.exports = (client) =>{
    
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.username}`);
        client.user.setActivity(`y/help | ${client.guilds.cache.size} servers.` , {type : "STREAMING"});
    });

    client.on('message', message => require('./message')(client, message));
    client.on('error', err => console.log(err));
    client.on('warn', res => console.log(res));
    client.on('shardDisconnect', (event, shardID) => console.log(`Shard ${shardID} disconnected at ${Date(Date.now)}`));
    client.on('shardReconnecting', id => console.log(`Shard ${id} reconnecting at ${Date(Date.now)}`));
    client.on('shardResumed', (replayed, shardID) => console.log(`Shard ${shardID} resumed connection and replayed ${replayed} events at ${Date(Date.now)}`));
}