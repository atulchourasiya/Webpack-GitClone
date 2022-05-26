const { dirname } = require('path');
const path = require('path');
module.exports={
 mode:"production",
 entry:'./src/index.js',
 output: {
   path: path.resolve(__dirname, 'dist'),
   filename: 'output.js'
 },

   module: {
     rules: [
       { test: /\.css$/,
        use:['style-loader','css-loader'] },
        {
         test: /\.(png|jpg|gif)$/,
         use: {
            loader: 'file-loader',
            options: {
               name: '[name].[ext]',
               // name: '[path][name].[hash].[ext]',
               outputPath: 'images'
             }
         }
       },
         {
         test: /\.(html)$/,
         use: {
           loader: 'html-loader',
           options: {
             attrs: [':data-src']
           }
         }
       }
     ],
   },

}