Webpack procedure 1

- Based on [How to configure Webpack 4 or 5 from scratch for a basic website](https://dev.to/antonmelnyk/how-to-configure-webpack-from-scratch-for-a-basic-website-46a5)

```
$ npm i --save-dev webpack webpack-cli
```

- It installs webpack with webpack cli
- But the best step is on webpack process 2
- Create a webpack.config.js in the root folder
- Give the entry point of your index.js in the `webpack.comfig.js` file example ` entry: "./src/index.js",`
- Make the watch true in the `webpack.comfig.js` file to let the webpack watching the files
- Install [babel loader](https://github.com/babel/babel-loader). Installing command `npm install -D babel-loader @babel/core @babel/preset-env webpack`.
- Install [Sass loader](https://github.com/webpack-contrib/sass-loader) for compiling sass `npm install sass-loader sass webpack --save-dev`
- Keep your index.html inside `dist` folder to work with auto reload by browserSynck plugin, else it will not work. Reason base directory is `server: { baseDir: ["dist"] }`
- Additional Plugins used here
  - [BrowserSync Webpack](https://www.npmjs.com/package/browser-sync-webpack-plugin)
  - [ Webpack watch external files ](https://www.npmjs.com/package/webpack-watch-external-files-plugin?activeTab=readme)

* Run the build with `npm run build`

### Treat index.js as entry points

Treat index.js as entry points for all your component scripts and styles. Use:

- `import { NumberTxt, Maintxt } from "./components/number"` if js files
- `import "./style.css"` if style loader
- `import 'main.scss'` if sass-loader

### Other plugins / loaders

[style loader](https://webpack.js.org/loaders/style-loader/)
