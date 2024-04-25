const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@mui/material': path.resolve(__dirname, 'node_modules', '@mui/material/legacy'),
      '@mui/styled-engine': path.resolve(__dirname, 'node_modules', '@mui/styled-engine/legacy'),
      '@mui/system': path.resolve(__dirname, 'node_modules', '@mui/system/legacy'),
      '@mui/base': path.resolve(__dirname, 'node_modules', '@mui/base/legacy'),
      '@mui/utils': path.resolve(__dirname, 'node_modules', '@mui/utils/legacy'),
      '@mui/lab': path.resolve(__dirname, 'node_modules', '@mui/lab/legacy'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
    ],
  },
};
