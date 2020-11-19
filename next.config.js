const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const withImages = require('next-images');

const prod = process.env.NODE_ENV === 'PRODUCTION';

module.exports = withImages(
  withSass(
    withLess({
      assetPrefix: '/ywc18-interview-homework/',
      basePath: '/ywc18-interview-homework',
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
    })
  )
);
