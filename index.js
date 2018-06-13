module.exports = {
  plugins: ['react', 'jsx-a11y', 'import'],
  extends: [
    'eslint-config-airbnb',
    'eslint-config-prettier',
    'eslint-config-prettier/react',
  ].map(require.resolve),
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-underscore-dangle': 0,
    'no-confusing-arrow': 0,
    'no-shadow': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'react/no-unused-prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0,
  },
}
