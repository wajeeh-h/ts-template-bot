import { Interaction } from "discord.js";
import { Astolfo } from "../structs/Client";
import { Event } from "../structs/IEvent";

const InteractionCreateEvent: Event = {
  name: "interactionCreate",
  execute: async (client: Astolfo, interaction: Interaction) => {
    if (!interaction.isCommand()) {
      return;
    }
    const command = client.slashCommands.get(interaction.commandName);
    command?.execute(client, interaction);
  },
};

export = InteractionCreateEvent;
