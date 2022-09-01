import { Client, Collection } from "discord.js";
import { readdirSync } from "fs";
import { PARTIALS, INTENTS, TEST_ID, TOKEN } from "../const";
import { Command } from "./ICommand";
import path from "path";

export class Astolfo extends Client {
  slashCommands: Collection<string, Command> = new Collection();
  constructor() {
    super({ intents: INTENTS, partials: PARTIALS });
  }

  init() {
    this.loadEvents();
    this.login(TOKEN)
      .then(() => console.log("[Astolfo] Logged In..."))
      .catch(console.error);
  }

  async loadCommands() {
    const promises: any = [];
    const files = readdirSync(path.join(__dirname, "..", "commands")).filter(
      (file) => file.endsWith(".ts")
    );
    files.forEach((file) => {
      const promise: Promise<Command> = import(
        path.join(__dirname, "..", "commands", `${file}`)
      );
      promises.push(promise);
    });
    const commands = await Promise.all(promises);
    commands.forEach((command) => {
      this.slashCommands.set(command.args.name, command);
    });

    if (TEST_ID) {
      await this.guilds.cache
        .get(TEST_ID)
        ?.commands.set(commands.map((command) => command.args.toJSON()));
    } else {
      await this.application?.commands.set(
        commands.map((command) => command.args.toJSON())
      );
    }
  }

  loadEvents() {
    const files = readdirSync(path.join(__dirname, "..", "events")).filter(
      (file) => file.endsWith(".ts") || file.endsWith(".js")
    );
    files.forEach(async (file) => {
      const event = await import(
        path.join(__dirname, "..", "events", `${file}`)
      );
      this.on(event.name, (...args) => {
        event.execute(this, args);
      });
    });
  }
}
