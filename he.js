const { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Client();

const config = {
    token: 'OTUxNzQ0MTgwOTUzMTc0MDQ2.Yir61w.ahPqk9aFp_d1UrT0rB-I_pZ4bzM',
    prefix: '.',
}

client.on('ready', async() =>{
    console.log(`Loggin As ${client.user.tag}`);
    client.user.setPresence({
        status: 'idle',
        activity: {
            name: 'หี',
            type: 'WATCHING'
        }
    });
});

client.on('message', async(message) =>{
    if(message.content.startsWith(config.prefix)){
        message.channel.send(`หี`);
    }
});


client.login(config.token);
