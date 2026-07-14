import 'dotenv/config';
import { Client, Events, GatewayIntentBits } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

client.on("messageCreate",(message)=>{
  if(message.author.bot) return;
  message.reply({
    content : "Hi From bot"
  });
})

client.login(process.env.TOKEN);

