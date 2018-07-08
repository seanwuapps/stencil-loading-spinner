const sass = require('@stencil/sass');

exports.config = {
  bundles: [
    { components: ['loading-spinner'] }
  ],
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
