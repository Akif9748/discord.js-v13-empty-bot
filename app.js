require("./keepAlive.js");
const { Client } = require("discord.js")
const { joinVoiceChannel } = require('@discordjs/voice');
const { main } = require("./config.json");
const { AFKVoiceChannelID } = main;

const client = new Client({ intents: 1 })

client.on("ready", client => {
  console.log(client.user.username, "app.js!")
  client.user.setPresence({
    activities: [{
      name: main.activity_name,
      type: main.activity_type
    }],
    status: main.status
  })
  let voiceChannel = client.channels.cache.get(AFKVoiceChannelID);
  joinVoiceChannel({ channelId: voiceChannel.id, guildId: voiceChannel.guild.id, adapterCreator: voiceChannel.guild.voiceAdapterCreator })
});

client.on("interactionCreate", interaction => {
  try {
    require(`./commands/${interaction.commandName}`)(interaction);
  } catch (e) {
    console.error(e);
  }
});

/*const Topgg = require("@top-gg/sdk")
const { TopGGToken } = main;
const api = new Topgg.Api(TopGGToken)
setInterval(() => {
  api.postStats({
    serverCount: client.guilds.cache.size,
    //shardId: client.shard.ids[0],
    //shardCount: client.options.shardCount
  })
}, 1000 * 60 * 60 * 3)*/

setTimeout(() => {
  try {
    console.log("Bot restarting.")
    process.exit(0);
  } catch (error) {
    console.log(error)
  }
}, 1000 * 60 * 60 * 3);

client.login(main.token);
