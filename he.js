const { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Client();

const config = {
    token: '',
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
    message.channel.send(`หี`);
});


client.login(config.token);
