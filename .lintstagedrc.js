module.exports = {
  '*.{ts.js}': [
    'eslint --format "node_modules/eslint-friendly-formatter" --fix',
    'git add'
  ]
}
