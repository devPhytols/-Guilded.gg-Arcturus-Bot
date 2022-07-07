const {
    Embed
} = require("guilded.js");

exports.run = (client, message, args) => {
    if (!args[0]) return message.reply("Por favor, me pergunte algo!");

    let respostas = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Most likely',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        "Don't count on it",
        'My reply is no',
        'My sources say no',
        'Outlook not so good',
        'Very doubtful'
    ];

    let resultado = Math.floor((Math.random() * respostas.length));
    let questao = args.slice(0).join(" ");

    const embed = new Embed()
        .setTitle(`Game 8ball`)
        .setColor(`#7629f2`)
        .addField(`Pergunta:`, `*${questao}*`)
        .addField(`Resposta:`, `*${respostas[resultado]}*`)
        .setTimestamp()

    console.log(embed)
    message.reply({
        embeds: [embed]
    })
}

exports.name = "8ball";