const { Embed } = require("guilded.js");
const fetch = require('node-fetch');

exports.run = async (client, message, args) => {
    try {
        let meme = await fetch('https://meme-api.herokuapp.com/gimme').then(r => r.json());
    
        const embed = new Embed()
        .setColor('#7629f2')
        .setTitle(`${meme.title}`)
        .setURL(meme.postLink)
        .setImage(meme.url)
        .setTimestamp()
    
        message.reply({ embeds: [embed] })
    } catch (err) {
        console.log(err)
    }
}

exports.name = "meme";