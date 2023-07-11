module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "nativewind/babel",
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            _assets: './assets',
            _components: './components',
            _screens: './screens',
          },
        },
      ],
    ],
  };
};
