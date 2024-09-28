module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@styles': './src/assets/styles',
            '@utils': './src/utils',
            '@pages': './src/pages',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
        },
      ],
    ],
  };
};
