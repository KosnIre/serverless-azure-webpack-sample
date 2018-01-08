/**
 * @file Configuration settings for eslint.
 * See http://eslint.org/docs/user-guide/configuring for syntax and specific rules.
 */

const config = {
  "extends": "airbnb-base",
  "env": {
    "browser": false,
    "node": true,
    "es6": true
  },
  "rules": {
    // -- base rules
    "arrow-parens": ["error", "always"],
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "comma-dangle": "off",
    "func-names": "off",
    "generator-star-spacing": ["error", "after"],
    "max-len": ["error", { "code": 180 }],
    "no-console": "off",
    // disallow certain syntax forms (keep ForOfStatement OK)
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    "no-param-reassign": "off",
    "no-use-before-define": ["error", { "functions": false, "classes": true, "variables": true }],
    // -- plugin rules
    "promise/always-return": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/param-names": "error",
    "no-nested-ternary": "off",
  },
  "plugins": [
    "promise",
    "import"
  ]
};

module.exports = config;
