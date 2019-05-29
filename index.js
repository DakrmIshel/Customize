const Discord = require("discord.js");
const client = new Discord.Client();
client.on("message", message => {
    var prefix = "/";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **}:}: No Permissionsssssss**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done We Cleared Messages",
        color: 0x06DF00,
        description: "Bot Cleared messages ",
        footer: {
          text: "©KBOOSHDev"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
     client.login('NTUwNjMzNzUxODk0NTU2Njcy.XO6ODA.F9aCqNSlUeCOo-VPc0Hot0jAQ1c')

     
