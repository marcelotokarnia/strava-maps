module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'standard',
    'standard-jsx',
    'prettier',
    'prettier/react',
    'prettier/standard',
    'plugin:@typescript-eslint/recommended',

    // Uses eslint-config-prettier to disable ESLint rules from
    // @typescript-eslint/eslint-plugin that would conflict with prettier
    'prettier/@typescript-eslint',

    // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
    // Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
    'plugin:security/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'prettier', 'standard', 'jest', 'security', 'typescript-sort-keys'],
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['**/*.spec.js'],
      rules: {
        'import/first': 'off',
        'security/detect-non-literal-regexp': 'off',
      },
    },
    {
      files: ['**/*.ts'],
      rules: {
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          { overrides: { constructors: 'no-public' } },
        ],
      },
    },
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
  settings: {
    react: { version: '16.6' },
  },
  rules: {
    'jest/no-focused-tests': 'error',
    'import/default': 2,
    'import/no-named-default': 'off',
    'typescript-sort-keys/interface': [
      'error',
      'asc',
      { caseSensitive: false, natural: true, requiredFirst: false },
    ],
    'typescript-sort-keys/string-enum': ['error', 'asc', { caseSensitive: false }],
    camelcase: 'off',
    'max-len': [
      'off',
      {
        code: 100,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'prettier/prettier': 'error',
    'standard/no-callback-literal': 'off',
    'no-unexpected-multiline': 'off',
    'node/no-deprecated-api': 'off',
    'new-cap': 'off',
    'lines-between-class-members': 'off',
    'sort-keys': ['error', 'asc', { caseSensitive: true, natural: true, minKeys: 5 }],
    'sort-imports': ['error', { ignoreCase: true }],

    // Security specific
    'security/detect-non-literal-fs-filename': 'off',

    // TypeScript-specific
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'security/detect-object-injection': 'off',
  },
  env: {
    'jest/globals': true,
    browser: true,
  },
  globals: {
    fetch: false,
  },
}
