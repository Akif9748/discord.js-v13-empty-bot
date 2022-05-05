const Discord = require("discord.js");
const { main } = require("./config.json");
const { supportServerInviteLink } = main;

module.exports = interaction => {
  const client = interaction.client;
  const embed = new Discord.MessageEmbed()
    .setAuthor({ name: "Example Command", iconURL: client.user.avatarURL() })
    .setDescription(`Beep boop. I am a bot, and this action was performed automatically.`)
    .addField("Invite Links:", `[Invite Bot](https://discord.com/oauth2/authorize?scope=bot+applications.commands&permissions=0&client_id=${client.user.id}) | [Support Server](https://discord.gg/${supportServerInviteLink}>)`)
    .setColor("RANDOM")
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter({
      text: "This command used by " + interaction.user.tag,
      iconURL: interaction.member.displayAvatarURL()
    }); interaction.reply({ embeds: [embed] });
};
