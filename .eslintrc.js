module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    strict: 0,
    /// reactnative doesn't support .jsx extentsions
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    /// avoid boilerplate propTypes for react-navigation props
    'react/prop-types': ['error', { ignore: ['navigation'] }],
  },
};
