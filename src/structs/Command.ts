import {
  ChatInputApplicationCommandData,
  CommandInteraction,
} from "discord.js";
import { Astolfo } from "./Client";

export type CommandType = {
  execute: (client: Astolfo, interaction: CommandInteraction) => void;
} & ChatInputApplicationCommandData;

export class Command {
  constructor(command: CommandType) {
    Object.assign(this, command);
  }
}
