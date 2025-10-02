# Linkedln Bot Frontend

This repository contains the open-source frontend for [joeygoesgrey/linkedln-bot](https://github.com/joeygoesgrey/linkedln-bot), the automation toolkit that writes, schedules, and engages on LinkedIn for you. The companion backend executes the browser automation and LinkedIn workflows, while this Next.js app provides a polished interface for creators, consultants, and teams to manage their content engine.

## Project Highlights

- ⚡ **Voice-matched AI composer** – generate posts, hooks, and comments aligned with your tone.
- 📅 **Campaign scheduling** – plan publishing cadences, set mentions, balance formats.
- 🤝 **Engage streams** – configure reply/like automation that keeps you top-of-feed.
- 📈 **Dashboard views** – draft management, scheduled queue, inspiration prompts, and more.

## Getting Started

1. **Clone the repos**
   ```bash
   git clone https://github.com/joeygoesgrey/linkedln-bot-frontend.git
   git clone https://github.com/joeygoesgrey/linkedln-bot.git
   ```

2. **Install frontend dependencies**
   ```bash
   cd linkedln-bot-frontend
   npm install
   npm run dev
   ```

## Repository Structure

```text
app/             # Next.js app router pages (marketing site + dashboard)
components/      # Reusable UI components (design system + auth shell)
lib/             # Shared utilities and constants
public/          # Static assets (placeholders for now)
```

## Contributing

Issues, pull requests, and feature ideas are welcome! Please open an issue describing the enhancement or bug fix before submitting large changes.

1. Fork the repository.
2. Create a topic branch: `git checkout -b feature/my-idea`.
3. Make your changes and add tests or screenshots where helpful.
4. Submit a pull request describing the change.

## License

This project is licensed under the [MIT License](./LICENSE). Feel free to adapt it for your own LinkedIn workflow, and consider contributing improvements back to the community.
