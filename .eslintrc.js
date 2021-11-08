module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        'min.js': 'never',
        '': 'never',
      },
    ],
    'prettier/prettier': [0, { singleQuote: true, parser: 'flow' }],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'prefer-template': 'off',
    'no-shadow': 'off',
    'no-unused-expressions': 'off',
    'no-nested-ternary': 'off',
    'import/no-cycle': 'off',
  },
}
