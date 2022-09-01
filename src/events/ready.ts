import { STATUS } from "../const";
import { Event } from "../structs/IEvent";

const ReadyEvent: Event<"ready"> = {
  name: "ready",
  execute: async (client, []) => {
    client.user?.setActivity(STATUS);
    await client.loadCommands();
  },
};

export = ReadyEvent;
