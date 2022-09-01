import { ClientEvents } from "discord.js";
import { Astolfo } from "./Client";

export interface Event<Key extends keyof ClientEvents> {
  name: Key;
  execute: (
    client: Astolfo,
    args: ClientEvents[Key]
  ) => Promise<unknown | void> | unknown | void;
}
