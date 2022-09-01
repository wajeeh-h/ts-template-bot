import { Event } from "../structs/IEvent";

const InteractionCreateEvent: Event<"interactionCreate"> = {
  name: "interactionCreate",
  execute: (client, [interaction]) => {
    if (!interaction || !interaction.isChatInputCommand()) {
      return;
    }

    const command = client.slashCommands.get(interaction.commandName);
    command?.execute(client, interaction);
  },
};

export = InteractionCreateEvent;
