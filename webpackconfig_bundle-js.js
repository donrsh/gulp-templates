module.exports = {
  // entry:{
  //   bundle: './app/js/index.jsx',
  // },
  // output:{
  //   filename: '[name].js',
  // },
  module: {
    loaders: [
   	  { test: /\.jsx?$/, 
        exclude: /(node_modules|bower_components)/, 
        loader: 'babel', 
        query: {
          presets: ['react', 'es2015', 'stage-2']
        } 
      },
    ]
  }
};