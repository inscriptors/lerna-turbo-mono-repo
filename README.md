# Turborepo Mono Repo Template

## Introduction

This repository showcases using a monorepo to house a design system and the various packages one could contain. It is built for React and uses a number of different tools to create and maintain packages:

-   🏎 [Turborepo](https://turborepo.org) — High-performance build system for monorepos
-   🔐 [Commitlint](https://commitlint.js.org/#/) — Checks commits follow conventional commits format
-   📋 [Changesets](https://github.com/changesets/changesets) — Managing versioning, publishing and changelogs
-   🛠 [GitHub Actions](https://github.com/changesets/action) — Running workflows in continuous integration

## What is a Turborepo ?

[Turborepo](https://turborepo.org) is a high-performance build system for JavaScript and TypeScript codebases. It was designed after the workflows used by massive software engineering organizations to ship code at scale. Turborepo abstracts the complex configuration needed for monorepos and provides fast, incremental builds with zero-configuration remote caching.

Using Turborepo simplifes managing your design system monorepo, as you can have a single lint, build, test, and release process for all packages. [Learn more](https://vercel.com/blog/monorepos-are-changing-how-teams-build-software) about how monorepos improve your development workflow.

Turborepo is configured in CI/CD to only test packages that have changes detected in their workspaces, and, workspaces that depend on said package. For example, if Package A depends on Package B, and Package B changes, then turborepo will ensure both packages have their tests run.

## Main Features & Benefits

Highlights of benefits from using this monorepo are:

-   Turborepo caching so commands don't re-run unless changed detected.
-   Internal packages to house common configuration for tools like ESLint, TypeScript.
-   Type-checking method within each package that turborepo can cache.
-   Shared Storybook (`apps/docs`) across all React related packages.

### Utilities

This Turborepo has some additional tools already setup for you:

-   [TypeScript](https://www.typescriptlang.org/) for static type checking
-   [ESLint](https://eslint.org/) for code linting
-   [Prettier](https://prettier.io) for code formatting

## Versioning & Publishing Packages

-   `pnpm add-changeset` - Generate a changeset file
-   `pnpm version-packages` - Update versions, changelogs and dependencies of packages.
-   `pnpm release` - Publishes changes to package registry and creates git tags.

The monorepo uses [Changesets](https://github.com/changesets/changesets) to manage versions, create changelogs, and publish to the package registry. You'll need to create an `NPM_TOKEN` and `GITHUB_TOKEN` and add it to your GitHub repository settings to enable access to the package registry.

### Generating the Changelog

To generate your changelog, run `pnpm add-changeset` locally:

1. **Which packages would you like to include?** – This shows which packages and changed and which have remained the same. By default, no packages are included. Press `space` to select the packages you want to include in the `changeset`.
1. **Which packages should have a major bump?** – Press `space` to select the packages you want to bump versions for.
1. If doing the first major version, confirm you want to release.
1. Write a summary for the changes.
1. Confirm the changeset looks as expected.
1. A new Markdown file will be created in the `changeset` folder with the summary and a list of the packages included.

These changeset files should be part of your PR and committed into the trunk branch, ready for future release.

### Releasing

When you merge your PR into the trunk branch, the [GitHub Action](https://github.com/changesets/action) will create a PR with all of the package versions updated and changelogs updated. If more PRs get merged with more changesets then the PR opened by the GitHub Action will be updated.

Merging this PR will, along with updating all of the files it changed, make the GitHub Action trigger it's release cycle where it attempts to publish each package within the workspaces package file.

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

-   [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
-   [Caching](https://turbo.build/repo/docs/core-concepts/caching)
-   [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
-   [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
-   [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
-   [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
