const configConventional = require('@commitlint/config-conventional');

const configConventionalTypeEnum = configConventional.rules['type-enum'];

const ADDITIONAL_TYPES = [
  'ui', // Any UI Changes
  'infra', // Infra config changes
  'wip', // Work In Progress
  'dx', // Any improvements towards Developer Experience
];

/**
 * @type {import('@commitlint/types')['UserConfig']}
 */
const Configuration = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [...configConventionalTypeEnum[2], ...ADDITIONAL_TYPES]],
  },
};

module.exports = Configuration;
