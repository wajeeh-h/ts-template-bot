import { STATUS } from "../const";
import { Event } from "../structs/IEvent";

const ReadyEvent: Event<"ready"> = {
  name: "ready",
  execute: (client, interaction) => {
    client.loadCommands();
    client.user?.setActivity(STATUS);
  },
};

export = ReadyEvent;