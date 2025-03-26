import { includeIgnoreFile } from '@eslint/compat';

import eslintImport from 'eslint-plugin-import';
import sortKeysPlus from 'eslint-plugin-sort-keys-plus';
import path from 'node:path';
import { dirname } from 'path';
import tsEslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const gitignorePath = path.resolve(__dirname, '.gitignore');

export default [
  includeIgnoreFile(gitignorePath),
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: { '@typescript-eslint': tsEslint.plugin, import: eslintImport, 'sort-keys-plus': sortKeysPlus },
    rules: {
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
      'import/default': 'error',
      'import/export': 'error',
      'import/named': 'error',
      'import/no-duplicates': 'warn',
      'import/no-unresolved': 'error',
      'sort-keys-plus/sort-keys': 'warn',
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
      react: {
        version: 'detect',
      },
    },
  },
];
