---
title: 'How to Create a Zip Archive of Changed Files Between Two Commits Using Git'
date: 2024-01-19
---

Git is a powerful version control system that allows you to track changes to your source code. Git also provides a set of commands to help you package and distribute your source code. In this article, we will explore how to create a zip archive of changed files between two commits using Git.

---

## Prerequisites

Before proceeding, make sure you have Git installed on your system. You can download and install Git from [https://git-scm.com/](https://git-scm.com/).

## Step 1: Navigate to Your Git Repository

Open your terminal and navigate to the root directory of your Git repository.

```bash
cd /path/to/your/repo
```

## Step 2: Understanding the Command

The `git archive` command is used to create a zip or tar archive of a Git tree. To create an archive of only the changed files between two commits, we will combine `git archive` with `git diff`.

The command syntax is as follows:

```bash
git archive -o archive.zip HEAD $(git diff --name-only --diff-filter=d BASE TARGET)
```

- `-o archive.zip`: Specifies the output file name (in this case, `archive.zip`).
- `HEAD`: Refers to the latest commit, which is the commit at the tip of the current branch.
- `$(git diff --name-only --diff-filter=d BASE TARGET)`: Uses the output of the `git diff` command to select only the names of the changed files between the specified commits (`BASE` and `TARGET`). The `--diff-filter=d` option excludes deleted files from the output.

The `BASE` and `TARGET` arguments can be any valid Git commit reference. For example, you can use a branch name, tag name, or commit hash.

### Specifying a range of commits using `HEAD~n`

You can also specify a range of commits using `HEAD~n`, where `n` is the number of commits to go back from the latest commit. For example, `HEAD~1` refers to the commit before the latest commit, `HEAD~2` refers to two commits before the latest commit, and so on.

```bash
git archive -o changes.zip HEAD~1 $(git diff --name-only --diff-filter=d HEAD~2)
```

## Step 3: Create the Archive

Now that we understand the command, let's create the archive. In this example, we will create a zip archive of the changed files between the latest commit and the commit before the latest commit.

```bash
git archive -o changes.zip HEAD $(git diff --name-only --diff-filter=d HEAD~1)
```

This command will create a zip archive named `changes.zip` in the current directory containing only the changed files between the latest commit and the commit before the latest commit.

## Conclusion

Creating a zip archive of changed files between two commits can be a useful way to package and distribute updates. By combining the `git archive` and `git diff` commands, you have a powerful tool to generate archives tailored to your specific needs. Experiment with different commit references and branch names to customize the archive based on your project requirements.

Happy archiving! Elevate your Git proficiency with this advanced technique.

You can follow me on [Twitter](https://twitter.com/AbdelrhmanSWE) to get notified about my latest blog posts.