import { ChatInputApplicationCommandData, Interaction } from "discord.js";
import { Astolfo } from "./Client";

export interface Command {
  args: ChatInputApplicationCommandData;
  execute: (
    client: Astolfo,
    interaction: Interaction
  ) => Promise<unknown | void> | unknown | void;
}
