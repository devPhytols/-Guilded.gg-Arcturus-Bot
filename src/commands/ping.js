exports.run = (client, message, args) => {
    message.reply("pong!").catch(console.error);
}

exports.name = "ping";