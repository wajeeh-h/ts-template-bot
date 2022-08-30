import {
  ActivityOptions,
  ActivityType,
  GatewayIntentBits,
  Partials,
} from "discord.js";
import dotenv from "dotenv";

dotenv.config();

// Read environment variables
export const TEST_ID: string = process.env.TEST_ID as string;
export const ID_ONE: string = process.env.ID_ONE as string;
export const ID_TWO: string = process.env.ID_TWO as string;
export const CLIENT_ID: string = process.env.CLIENT_ID as string;
export const TOKEN: string = process.env.TOKEN as string;
export const PREFIX: string = process.env.PREFIX as string;

export const STATUS: ActivityOptions = {
  name: "Only Fans...",
  type: ActivityType.Streaming,
  url: "https://www.twitch.tv/wageethewitch",
};

export const INTENTS = [
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

export const PARTIALS = [
  Partials.User,
  Partials.Channel,
  Partials.GuildMember,
  Partials.Message,
  Partials.Reaction,
  Partials.GuildScheduledEvent,
  Partials.ThreadMember,
];
