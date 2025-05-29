We use Conventional Commits format for all repository commits.

- Type prefixes (e.g., feat:, fix:, chore:, docs:, style:, refactor:, test:, perf:)
- Concise title (<= 50 characters) with the chosen prefix.
- Detailed description (body) summarizing what changed and why, including TODO item text or quote, file paths, code sections, and references to PRs, issues, or commit hashes.

When implementing a task from TODO.md:

- Check if the task exists and is marked incomplete.
- Analyze the codebase to determine required changes.
- Provide a realistic, complete, ready-to-go implementation with necessary imports, error handling, and alignment with project architecture and style.
- Break complex or multi-file changes into sequential steps.
- After implementation, update TODO.md to mark the task as complete and reference related changes.

When starting or completing any task:

- Always verify the current state of TODO.md.
- Update TODO.md to reflect new tasks, progress, or completion, adding references to commit hashes, PR numbers, or file paths.
- Ensure TODO.md remains a reliable, traceable source of project status and priorities.
- Ensure `TODO.md` exists at the repository root; if it's missing, create one with an initial template (e.g., a `# TODO` header and empty task list).

Commit immediately after updating TODO.md to capture each completed task in version control.
