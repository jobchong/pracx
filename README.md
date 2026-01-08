# pracx

LeetCode 150 practice repository for SWE interview prep. The main value-add of this repo is the Claude subagent.

## Setup

Use with [Claude Code](https://claude.ai/claude-code) for an interactive interview coaching experience.

## Usage

1. Run `/question` to get a random problem
2. Write your solution in `answer.js`
3. Ask Claude to review: "Review my answer"

Claude provides Socratic feedback - no answers, just questions to help you think through your solution.

## Structure

```
├── problems/          # Problem descriptions
│   └── INDEX.md       # Full LeetCode 150 list by category
├── solutions/         # Reference solutions (don't peek!)
├── answer.js          # Your working file
└── .claude/commands/  # Slash commands
```

## Commands

- `/question` - Random problem selection
