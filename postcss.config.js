module.exports = {
  plugins: [
    require('postcss-import')({
      glob: true
    }),
    require('postcss-mixins')({
      silent: true
    }),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')({
      browsers: ["last 5 versions"]
    }),
    require('cssnano')
  ]
};