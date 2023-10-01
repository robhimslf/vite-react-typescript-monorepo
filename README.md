# vite-react-typescript-monorepo

Example scaffolding for a monorepo pattern housing a TypeScript-based React application using Vite.

## What is this?

A monorepo is a pattern of codebase organization in which a single repository contains multiple distinct projects that would otherwise be separated into their own repositories. Projects that have some sort of loose or hard dependency on one another - but logically independent - can be housed in the same repository for developer convenience while maintaining isolation. This allows multiple developers or developer teams to work within the same overall codebase without impacting the others.

Consider the following application architecture as an example:

1. `common` contains types, classes, components, etc. that can be used by other projects within the codebase.
2. `main` is the primary React project, and a consumer of the other project packages; in this case the `common` package.

A traditional approach to organizing this would be to create multiple distinct repositories, and build their output to a Node Package Manager registry. Consumer projects would then install and import dependencies in a similar fashion to React or Bootstrap. The downside to this approach is that any time a change is made to `common` it must be republished to the Node Package Manager registry in order for consumer projects to pick up the latest changes.

The monorepo approach can drastically improve this workflow by enabling the ability to import project package dependencies directly from the workspace rather than a Node Package Manager registry.

## Prerequisites

- [Node.js](https://nodejs.org)
- [PNpm](https://pnpm.io/installation)

## Getting Started

Fork this repository, clone it to your workstation, and then:

1. `cd path/to/cloned/repo`
2. `pnpm install`
3. `pnpm dev`

## Cheatsheet

The following is just a small cheatsheet of common commands for extending this example. See the [PNpm documentation](https://pnpm.io/motivation) for more.

All examples assume the root of this directory as a starting point.

### Add a Package

Replace `core-services` with the desired package name where referenced.

```sh
cd packages
mkdir core-services
cd core-services
pnpm init
```

Modify the generated `package.json` within the new package folder. It's `name` value should be updated to the package namespace: `@example/core-services`.

### Add a Package Dependency

The following will add a workspace package as a dependency of `core-app`. Replace `core-services` with the desired package name where referenced.

```sh
cd packages/core-app
pnpm add @example/core-services
```