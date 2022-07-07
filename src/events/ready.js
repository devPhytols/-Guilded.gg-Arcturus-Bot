const c = require("colors");

module.exports = (client) => {
    console.log(c.yellow(`[GUILDED]`), `Conectado em`, c.yellow(`${client.user.name}`))
}