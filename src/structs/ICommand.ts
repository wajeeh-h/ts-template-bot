import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { Astolfo } from "./Client";

export interface Command {
  args: SlashCommandBuilder;
  execute: (
    client: Astolfo,
    interaction: ChatInputCommandInteraction
  ) => Promise<unknown | void> | unknown | void;
}
