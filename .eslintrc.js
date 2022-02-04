/* eslint-disable @typescript-eslint/no-var-requires */
const prettierConfig = require('./.prettierrc.js');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    jsx: true,
    useJSXTextNode: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'eslint-config-prettier',
  ],
  plugins: ['@typescript-eslint', 'react-hooks', 'eslint-plugin-prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': ['error', prettierConfig],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
