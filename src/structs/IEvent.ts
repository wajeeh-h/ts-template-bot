import { ClientEvents, Interaction } from "discord.js";
import { Astolfo } from "./Client";

export interface Event {
  name: keyof ClientEvents;
  execute: (
    client: Astolfo,
    interaction: Interaction
  ) => Promise<unknown | void> | unknown | void;
}
