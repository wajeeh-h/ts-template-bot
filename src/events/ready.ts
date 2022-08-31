import { STATUS } from "../const";
import { Astolfo } from "../structs/Client";
import { Event } from "../structs/IEvent";

export const ReadyEvent: Event = {
  name: "ready",
  execute: (client: Astolfo) => {
    client.loadCommands();
    client.user?.setActivity(STATUS);
  },
};
