const Discord = require("discord.js");
const client = new Discord.Client();
client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **oh sorry YOU DON`T HAVE PREMISSION**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done Chat Has Been Cleared",
        color: 0x06DF00,
        description: "Chat Has been cleared ",
        footer: {
          text: "©zabhm"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'INFO') {
              message.channel.send('**:white_check_mark: INFO >> BOT CREATED BY DARKMISHEL#8222 ANY BUGS SEND IT To HIM**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'Fuck') {
              message.channel.send('**:white_check_mark: We Send u Word To staff :white_check_mark: #1**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'Help') {
              message.channel.send('**Try Talk With Staff They Can help u**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'Lag') {
              message.channel.send('**if u want Check u ping try Type in chat ping**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'Staff') {
              message.channel.send('**.. We sending to staff u Need help:white_check_mark: **');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'Bitch') {
              message.channel.send('**Bad Word We will send it To staff }: :white_check_mark: Bad Word #2**');
              message.channel.sendFile("./photoshop.PNG");

  

            }
});


     client.login('NTUwNjMzNzUxODk0NTU2Njcy.XO6H1w._qh2hR_b5qjXYxdV5gkLCSTTUJg')

     