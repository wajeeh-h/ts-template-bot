import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { Astolfo } from "src/structs/Client";
import { Command } from "../structs/ICommand";

const Ping: Command = {
  args: new SlashCommandBuilder().setName("ping").setDescription("pong"),

  execute: async (
    client: Astolfo,
    interaction: ChatInputCommandInteraction
  ) => {
    await interaction.reply("pong!");
  },
};

export = Ping;
