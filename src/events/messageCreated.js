module.exports = (client, message) => {

  // Ignora as mensagens que não se iniciam com o prefixo
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  // Definição padrão de nome do args/comando.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Pega informações do comando no client.commands Enmap
  const cmd = client.commands.get(command);

  // Se o comando não exisitir, ignora e continua a execução
  if (!cmd) return;

  // Executa o comando
  cmd.run(client, message, args);

}