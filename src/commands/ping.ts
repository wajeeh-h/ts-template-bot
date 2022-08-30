import { Command } from "../structs/Command";

const ping = new Command({
  name: "ping",
  description: "pong!",
  execute(client, interaction) {
    interaction.reply("Pong!");
  },
})
export = ping;
