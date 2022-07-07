const { Embed } = require("guilded.js");

exports.run = async (client, message, args) => {
    
    const member = await client.members.fetch(message.serverId, message.raw.createdBy)

    const { avatar, name } = member.user

    const embed = new Embed()
    .setColor(`#7629f2`)
    .setTitle(`${name}'s Profile Avatar`)
    .setImage(avatar)

    message.reply({ embeds: [embed] })
}

exports.name = "avatar";