const { Client, Attachment } = require('discord.js');
const client = new Client();
const prefix = 'hack!';

client.on('ready', () => console.log('Bot has logged in!'));

client.on('message', async (msg) => {
  if(msg.author.bot || !msg.content.startsWith(prefix)) return;
  let args = msg.content.split(' ');
  const command = args.shift().slice(prefix.length);
  //Add your commands here. Good command handlers are overrated :POGGERS:
  
  if(command === 'ping'){
    const m = await msg.channel.send('Pinging...');
    m.edit(`Ponggers! Client ping: \`${m.createdTimestamp - msg.createdTimestamp}\`ms. Heartbeat ping: \`${client.ping}\`ms`);
  } else if(command === 'hello') {
    await msg.reply(`Hello ${sent.author.username}`);
  } else if(command === 'lul') {
    const attachment = new Attachment('https://ubisafe.org/images/lul-transparent-twitch-1.png');
    message.channel.send(attachment);
  }
})

client.login(process.env.TOKEN);
