require("dotenv/config");
const { Collection } = require("@discordjs/collection");
const { Client, Embed } = require("guilded.js");
const fs = require("fs");
const c = require("colors");
const config = require("./src/config/config.json");
const client = new Client({ token: config.token });

client.config = config;
client.commands = new Collection();

const events = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
for (const file of events) {
  const eventName = file.split(".")[0];
  const event = require(`./src/events/${file}`);
  client.on(eventName, event.bind(null, client));

  console.log(c.red(`[EVENTOS]`), `Evento ${eventName} carregado!`)
}

const commands = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"));
for (const file of commands) {
  const commandName = file.split(".")[0];
  const command = require(`./src/commands/${file}`);

  console.log(c.cyan(`[COMANDO]`), `${commandName} foi carregado!`);
  client.commands.set(commandName, command);
}

client.login();