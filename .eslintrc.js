module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'indent': ['4', 'error']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
