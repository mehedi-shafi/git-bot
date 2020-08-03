import Discord from 'discord.js';
import getMessage from './random_welcome';

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
    client.user.setActivity(`with masks`);
});

client.on('guildCreate', guild => {
    // this event triggers when the bot is added to new guild
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

client.on("message", async message => {
    if (message.author.bot) return;

    if (message.content.indexOf(process.env.bot_prefix) !== 0) return;

    const args = message.content.slice(process.env.bot_prefix).trim().split(/ +/g);
    let command = args.shift().toLowerCase();

    command = command.replace(process.env.bot_prefix, '');

    if (command === 'ping') {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }

    if (command === "say") {
        const sayMessage = args.join(" ");
        if (!sayMessage) {
            //sayMessage = ``;
            message.channel.send('What to say?');
        }
        else {
            message.delete().catch(O_o => { });
            message.channel.send(sayMessage);
        }
    }

    /*
    //WIP
        if (command === "shout") {
            const sayMessage = args.join(" ");
            if (!sayMessage) {
                message.channel.send('Send a text to shout');
            }
            //message.delete().catch(O_o=>{});
            else
                message.channel.send(sayMessage);
        }
    */

    if (command === "status") {
        const os = require('os');
        var timestamp = process.uptime();
        var days = Math.floor(Math.floor(timestamp / 60 / 60) / 24);
        var hours = Math.floor(timestamp / 60 / 60) - (days * 24);
        var minutes = Math.floor(timestamp / 60) - (hours * 60) - (days * 24 * 60);
        var seconds = Math.floor(timestamp % 60);
        var formatedut;
        if (days) {
            formatedut = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
        }
        else if (!days && hours) {
            formatedut = hours + 'h ' + minutes + 'm ' + seconds + 's';
        }

        else if (!hours && minutes) {
            formatedut = minutes + 'm ' + seconds + 's';
        }
        else {
            formatedut = seconds + 's';
        }
        var totalmem = ((os.totalmem()) / (Math.pow(1024, 3)));
        var freemem = ((os.freemem()) / (Math.pow(1024, 3)));
        const sayMessage = 'OS: ' + os.type() + '\nUptime: ' + formatedut + '\nTotal Memory: ' + totalmem.toFixed(2) + ' GB' + '\nFree Memory: ' + freemem.toFixed(2) + ' GB';
        message.channel.send(sayMessage);
    }

    if (command === 'cheatsheet') {
        // discord does not allow message longer than 2000 characters.
        message.channel.send({ files: ['cheatsheet.md'] });
    }

});


client.on('guildMemberAdd', member => {
    // send customized welcome to welcome channel
    let message = getMessage(`<@${member.id}>`);
    console.log(JSON.stringify(client.channels.cache, null, 4));
    let channel = client.channels.cache.find(item => item['name'] == 'welcome');
    channel.send(message);
    // client.channels.cache.find('name', 'welcome').send(message);
})


let start = () => {
    client.login(process.env.bot_token);
}

export default start = start;