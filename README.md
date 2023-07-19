# @onify/commitlint-config

Shareable `commitlint` config enforcing [Conventional Commits](https://www.conventionalcommits.org/) thru extension of [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional). Use with [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli).

## Installation

```console
npm install @commitlint/cli https://github.com/onify/commitlint-config.git
```

## Usage

Best used with [husky](https://typicode.github.io/husky) as a `commit-msg` hook.

### With a dedicated Commitlint Config

Create a `commitlint.config.js` file on the root directory and extend with this package:

```js
module.exports = {
  extends: ['@onify'],
};
```

### With package.json

In the `package.json` of your project

```json
{
  "commitlint": {
    "extends": ["@onify"],
  }
}
```

## Valid Types

| Type      | Description                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------- |
| build     | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)             |
| chore     | Changes to the build process or auxiliary tools and libraries such as documentation generation                  |
| ci        | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)     |
| **ui**    | Changes that only affects the UI                                                                                |
| docs      | Documentation only changes                                                                                      |
| **dx**    | Any changes or addition that improves developer experience                                                      |
| feat      | A new feature                                                                                                   |
| fix       | A bug fix                                                                                                       |
| **infra** | Changes to any infrastructure configuration files and/or scripts (example scopes: aws, heroku, azure, nginx)    |
| perf      | A code change that improves performance                                                                         |
| refactor  | A code change that neither fixes a bug nor adds a feature                                                       |
| revert    | [Read here](https://www.conventionalcommits.org/en/v1.0.0/#how-does-conventional-commits-handle-revert-commits) |
| style     | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)          |
| test      | Adding missing tests or correcting existing tests                                                               |
| **wip**   | Work in progress. For partial progress that you want to sync on the remote repo.                                |


**Note:** Descriptions taken directly from [Angular's Commit Message Type Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type) except for types that are in **bold** characters as they are new types added by this config.
