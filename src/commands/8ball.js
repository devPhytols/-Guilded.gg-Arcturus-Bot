const { Embed } = require("guilded.js");

exports.run = (client, message, args) => {
    if(!args[0]) return message.reply("Por favor, me pergunte algo!");

    let respostas = [
        'Pode ser.',
        'Certamente não.',
        'Espero que sim.',
        'Não em seus sonhos mais selvagens.',
        "Há uma boa chance." ,     
        "Muito provável." ,     
        'Eu penso que sim.' ,     
        'Espero que não.' ,     
        'Espero que sim.' ,     
        'Nunca!' ,     
        'Pfft.' ,     
        'Desculpe, mas não, seu fanfarrão.',
        'Claro que sim.',
        'Inferno para o não.',
        'O seu futuro é sombrio.',
        'O futuro é incerto.',
        'Eu prefiro não falar.',
        'Quem se importa?',
        'Possivelmente.',
        "Nunca, nunca, nunca.",
        "Há uma pequena chance.",
        'Sim!',
        'lol não.',
        "Há uma grande probabilidade.",
        'Que diferença isso faz?',
        'Não é problema meu.',
        'Pergunte a outra pessoa.'
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
    message.reply({ embeds: [embed] })
}

exports.name = "8ball";