const Discord = require('discord.js');
const api = require("@zikeji/hypixel");
const fs = require("fs-extra");
const apiClient = new api.Client(process.env.KEY);
const client = new Discord.Client();
const prefix = "sa-"
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./commands/").filter(f=>f.endsWith(".js"));
commands.forEach(command=>{
    let cmd = require(`./commands/${command}`);
    client.commands.set(cmd.name, cmd);
})
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message=>{
    if(!message.content.startsWith(prefix)||message.author.bot==true) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    try {
        client.commands.get(command).execute(client, message, args);
    } catch(err){
        console.log(err)
    }
    
})
client.login(process.env.TOKEN);