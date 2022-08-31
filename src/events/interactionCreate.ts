import { Interaction } from "discord.js";
import { Event } from "../structs/IEvent";

const InteractionCreateEvent: Event<"interactionCreate"> = {
  name: "interactionCreate",
  execute: async (client, interaction: Interaction) => {
    if (!interaction || !interaction.isCommand()) {
      return;
    }
    const command = client.slashCommands.get(interaction.commandName);
    command?.execute(client, interaction);
  },
};

export = InteractionCreateEvent;
