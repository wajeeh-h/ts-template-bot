import { STATUS } from "../Const";
import { Astolfo } from "../structs/Client";
import { Event } from "../structs/IEvent";

const ReadyEvent: Event = {
  name: "ready",
  execute: (client: Astolfo) => {
    client.loadCommands();
    client.user?.setActivity(STATUS);
  },
};

export = ReadyEvent;
