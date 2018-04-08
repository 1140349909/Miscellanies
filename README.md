# Miscellanies
学习杂集

Chapter1.前端大牛是如何炼成的？

1.这几个loader用来处理.css和.scss文件，一起安装用空格隔开:
$ npm install --save-dev style-loader css-loader sass-loader

2.url-loader
  这个loader是用来处理url链接，就是图片或者其他静态文件。

3.npm install --save react react-dom 

4.npm install --save-dev babel-cli babel-preset-react babel-preset-env webpack

5.npm install --save-dev babel-loader

6. html-webpack-plugin
  这个插件的作用就是自动生成html（其实也可以自己写，就是加了个bundle.js的script而已，不过感觉比较酷）：
  plugins安装好了之后要放在webpack.config.js的plugins的数组里，不要写在modules里呀~
  
7.webpack-dev-server
用来构建本地开发的服务器，可以让浏览器监测代码的修改，并自动刷新修改后的结果
webpack-dev-server有以下几个配置选项：

contentBase：默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）

port：设置默认监听端口，如果省略，默认为”8080“

inline：设置为true，当源文件改变时会自动刷新页面

historyApiFallback：在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html

8.react-transform-hrm
HMR是一个webpack插件，它让你能浏览器中实时观察模块修改后的效果，但是如果你想让它工作，需要对模块进行额外的配额；
Babel有一个叫做react-transform-hrm的插件，可以在不对React模块进行额外的配置的前提下让HMR正常工作；
安装：
npm install --save-dev babel-plugin-react-transform react-transform-hmr


9.加载less,先安装less-loader
npm install less less-loader --save-dev