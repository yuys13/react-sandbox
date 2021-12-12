module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['jsx', 'tsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.test.*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
}
