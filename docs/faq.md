# ❓ Frequently Asked Questions (FAQ)

Find answers to the most common questions and issues below.

---

## 🚀 General

### Is LavaMusic free?

Yes! LavaMusic is 100% open-source and free to use. There are no hidden fees or paywalls for premium features.

### Which audio sources are supported?

We support YouTube, Spotify, SoundCloud, Apple Music, and direct file links (MP3, WAV, etc.).

---

## 🛠️ Troubleshooting

### The bot is online but not playing music

1. Check if your **Lavalink server** is running at `localhost:2333`.
2. Ensure you have provided a valid Lavalink password in your `.env` file.
3. Check the console logs for any connection errors.

### Why is my bot lagging or skipping?

Lag is usually caused by:

- Slow internet connection on the host machine.
- High CPU usage on the Lavalink server.
- Using a public Lavalink node that is overloaded. We recommend hosting your own!

### I get a "Permission Denied" error

Make sure the bot has the following permissions in your Discord server:

- `View Channels`
- `Send Messages`
- `Embed Links`
- `Connect`
- `Speak`

---

## ⚙️ Configuration

### How do I change the prefix?

You can use the `/prefix set` command if you have higher permissions, or change the default prefix in your `.env` file.

### How do I setup DJ roles?

Use the `/dj add <role>` command to specify which roles can control the music.

---

::: tip STILL STUCK?
If you couldn't find your answer here, feel free to join our [Support Server](https://mintone.tech/support). We're happy to help!
:::
