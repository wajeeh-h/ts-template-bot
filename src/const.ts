import {
  ActivityOptions,
  ActivityType,
  GatewayIntentBits,
  Partials,
} from "discord.js";
import dotenv from "dotenv";

dotenv.config();
// Read environment variables
export const TEST_ID = process.env.TEST_ID;
export const ID_ONE = process.env.ID_ONE;
export const ID_TWO = process.env.ID_TWO;
export const CLIENT_ID = process.env.CLIENT_ID;
export const TOKEN = process.env.TOKEN;
export const PREFIX = process.env.PREFIX;

export const STATUS: ActivityOptions = {
  name: "Only Fans...",
  type: ActivityType.Streaming,
  url: "https://www.twitch.tv/wageethewitch",
};

export const INTENTS: GatewayIntentBits[] = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.GuildEmojisAndStickers,
  GatewayIntentBits.GuildIntegrations,
  GatewayIntentBits.GuildWebhooks,
  GatewayIntentBits.GuildInvites,
  GatewayIntentBits.GuildPresences,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildMessageReactions,
  GatewayIntentBits.GuildMessageTyping,
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.DirectMessageReactions,
  GatewayIntentBits.DirectMessageTyping,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildScheduledEvents,
];

export const PARTIALS: Partials[] = [
  Partials.User,
  Partials.Channel,
  Partials.GuildMember,
  Partials.Message,
  Partials.Reaction,
  Partials.GuildScheduledEvent,
  Partials.ThreadMember,
];
