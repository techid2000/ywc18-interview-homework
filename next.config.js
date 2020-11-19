const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const withImages = require('next-images');

module.exports = withImages(
  withSass(
    withLess({
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
    })
  )
);
