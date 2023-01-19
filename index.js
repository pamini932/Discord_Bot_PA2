
const {Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions}= require(`discord.js`);

const prefix = '>';

const client = new Client ({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () =>{
    console.log("PA_Bot2 is online");

    client.user.setActivity('Subsrcribe to PA', { type: "WATCHING" });
})

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    //message array
    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    //COMMAND

    //Test Command

    if (command === 'test'){
        message.channel.send("PA Bot is working")
    }















} )


























client.login("MTA2NDY1ODUwODc0MzcxNjg5NQ.G28pf1.HI6w5Y2eyEp-X0auIDQe7q_11fiHSQpjKUBKLk");
