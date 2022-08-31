import { ClientEvents, Interaction } from "discord.js";
import { Astolfo } from "./Client";

export interface Event<Key extends keyof ClientEvents> {
  name: Key,
  execute: (
    client: Astolfo,
    args: any
  ) => Promise<unknown | void> | unknown | void;
}
