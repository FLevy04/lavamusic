import { Colors } from "discord.js";

/**
 * Mapping of log levels to Discord embed colors.
 */
export const LOG_COLORS = {
  error: Colors.Red, // 0xff0000,
  warn: Colors.Yellow, //0xffff00,
  info: Colors.Blue, //0x00ff00,
  success: Colors.Green, //0x00ff00,
} as const;

/**
 * Derives the allowed log levels directly from the keys of the {@link LOG_COLORS} object.
 */
export type LogLevel = keyof typeof LOG_COLORS;
