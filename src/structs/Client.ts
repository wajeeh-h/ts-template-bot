import {
  ApplicationCommandDataResolvable,
  Client,
  Collection,
} from "discord.js";
import { readdirSync } from "fs";
import path from "path";
import { PARTIALS, INTENTS, TEST_ID, TOKEN } from "../const";
import { Command } from "./ICommand";
import { Event } from "./IEvent";

export class Astolfo extends Client {
  slashCommands: Collection<string, Command> = new Collection();
  constructor() {
    super({ intents: INTENTS, partials: PARTIALS });
  }

  init() {
    this.loadEvents();
    if (!TOKEN) {
      console.log("[ERROR] Token Not Defned"); 
      process.exit(1);
    }
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
      const command: Command = await import(
        path.join(__dirname, "..", "commands", `${file}`)
      );
      this.slashCommands.set(command.args.name, command);
      commands.push(command.args);
    });
    if (TEST_ID){
      this.guilds.cache.get(TEST_ID)?.commands.set(commands);
    }
    else {
      this.application?.commands.set(commands);
    }
  }

  async loadEvents() {
    const files = readdirSync(path.join(__dirname, "..", "events")).filter(
      (file) => file.endsWith(".ts")
    );
    files.forEach(async (file) => {
      const event: Event = await import(
        path.join(__dirname, "..", "events", `${file}`)
      );
      this.on(event.name.toString(), (interaction) => {
        event.execute(this, interaction);
      })
    });
  }
}
