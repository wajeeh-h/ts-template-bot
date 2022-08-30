import { Interaction } from "discord.js";
import { Astolfo } from "./Client";

export interface Event {
  name: string;
  execute: (
    client: Astolfo,
    interaction: Interaction
  ) => Promise<unknown | void> | unknown | void;
}
