# Discord Bot

A TypeScript-powered Discord bot starter built with `discord.js`, designed to grow from a clean command scaffold into a reliable community automation bot.

This project is currently in its foundation stage: environment loading is wired with `dotenv`, the TypeScript build outputs to `dist/`, and the bot is ready to be shaped into whatever Discord workflow is needed next.

## Highlights

- Built with `discord.js` v14
- Written in TypeScript
- Uses environment variables for secrets
- ESM-ready Node.js project setup
- Simple structure that is easy to extend
- Lightweight starting point for future bot features

## Tech Stack

| Tool | Purpose |
| --- | --- |
| Node.js | Runtime |
| TypeScript | Type-safe development |
| discord.js | Discord API client |
| dotenv | Local environment variable loading |

## Project Structure

```text
.
+-- src/
|   +-- index.ts          # Bot entry point
+-- dist/                 # Compiled JavaScript output
+-- .env                  # Local secrets, not committed
+-- .gitignore
+-- package.json
+-- package-lock.json
+-- tsconfig.json
+-- README.md
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Create your environment file

Create a `.env` file in the project root:

```env
TOKEN=your_discord_bot_token_here
```

Keep this file private. It should never be committed to GitHub.

### 3. Build the project

```bash
npx tsc
```

### 4. Run the bot

```bash
npm start
```

On Windows PowerShell, if script execution is blocked, use:

```powershell
npm.cmd start
```

## Current Status

The project currently verifies environment loading from `.env`. The Discord client logic is present in `src/index.ts`, but it is commented while setup is being finalized.

Useful next setup steps:

- Discord client login
- Safer startup validation for missing environment variables
- A basic first command once the bot's purpose is decided

## Future Direction

No specific bot functionality has been planned yet. This repository is a clean foundation for experimenting with Discord automation, slash commands, moderation tools, server utilities, or any other feature set you decide to build later.

## Development Notes

Recommended files to commit:

- `src/`
- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `.gitignore`
- `README.md`

Recommended files to keep out of Git:

- `.env`
- `node_modules/`
- `dist/`


## License

This project is licensed under the ISC License.

## Author

Created by Vrund Kasodariya.
