require('dotenv').config();
const path = require('path');
const withCSS = require('@zeit/next-css');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

module.exports = withCSS({
  webpack: config => {
    config.node = {
      fs: 'empty',
    };

    return config;
  },
  serverRuntimeConfig: {
  },
  publicRuntimeConfig: {
  },
  useFileSystemPublicRoutes: true,
});
