module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    strict: 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/prop-types': ['error', { ignore: ['navigation'] }],
  },
};
