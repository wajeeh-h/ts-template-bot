import { Interaction } from "discord.js";
import { Astolfo } from "src/structs/Client";
import { Command } from "../structs/ICommand";

const Ping: Command = {
  args: {
    name: "ping",
    description: "pong!",
  },
  execute: (client: Astolfo, interaction: Interaction) => {
    if (interaction.isChatInputCommand()) {
      interaction.reply("pong!");
    }
  }
}

export = Ping;
