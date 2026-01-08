# Random LeetCode Question

Select a random problem from the LeetCode 150 list and present it to the user for practice.

## Instructions

1. Read the problems index file at `problems/INDEX.md`
2. Parse all the problem entries from the tables
3. Select one at random
4. Read the corresponding problem file if it exists, otherwise show the problem name and category
5. Present the problem to the user in this format:

```
## [Problem Number]. [Problem Name]
**Difficulty**: [Easy/Medium/Hard]
**Category**: [Category]

[Problem description, examples, and constraints from the problem file]

---
Good luck! Write your solution in `answer.js` and ask me to review when ready.
```

If the specific problem file doesn't exist yet, just show:
```
## [Problem Number]. [Problem Name]
**Difficulty**: [Easy/Medium/Hard]
**Category**: [Category]

Problem file not yet created. You can look up this problem on LeetCode, or ask me to create the problem file.

---
Write your solution in `answer.js` and ask me to review when ready.
```
