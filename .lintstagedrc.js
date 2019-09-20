module.exports = {
  '*.{ts}': [
    'eslint --ext .ts ./ --fix',
    'git add'
  ],
  'index.js': [
    'eslint ./index.js --fix',
    'git add'
  ]
}
