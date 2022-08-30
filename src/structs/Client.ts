import {
  ApplicationCommandDataResolvable,
  Client,
  Collection,
} from "discord.js";
import { readdirSync } from "fs";
import path from "path";
import { PARTIALS, INTENTS, TEST_ID, TOKEN } from "../Const";
import { CommandType } from "./Command";

export class Astolfo extends Client {
  slashCommands: Collection<string, CommandType> = new Collection();
  constructor() {
    super({ intents: INTENTS, partials: PARTIALS });
  }

  init() {
    this.loadEvents();
    this.login(TOKEN)
      .then(() => console.log("[Astolfo] Logged In..."))
      .catch((error) => console.error(error));
  }

  async loadCommands() {
    const commands: ApplicationCommandDataResolvable[] = [];
    const files = readdirSync(path.join(__dirname, "..", "commands")).filter(
      (file) => file.endsWith(".ts")
    );
    files.forEach(async (file) => {
      const command: CommandType = await import(
        path.join(__dirname, "..", "commands", `${file}`)
      );
      this.slashCommands.set(command.name, command);
      commands.push(command);
    });
    // this.application?.commands.set(commands);
    this.guilds.cache.get(TEST_ID)?.commands.set(commands);
  }

  async loadEvents() {
    const files = readdirSync(path.join(__dirname, "..", "events")).filter(
      (file) => file.endsWith(".ts")
    );
    files.forEach(async (file) => {
      const event = await import(
        path.join(__dirname, "..", "events", `${file}`)
      );
      this.on(event.name, (interaction) => {
        event.execute(this, interaction);
      });
    });
  }
}
