# smile

> A Vue.js project

## 前端环境的搭建
    *建立前端文件夹
    `mkdir vuedemo`

    *使用vue-cli生成项目目录
    * 检测npm版本，在终端输入`npm -v`
    * 全局安装vue-cli,在终端输入`npm install vue-cli -g`
    * 初始化文件，在终端输入`vue init webpack`

    *检测环境是否安装成功
    * 使用`npm run dev`将测试环境打开
    * 使用`ctrl`+鼠标左键，单击终端给出的路径

## 引入Vant组件库
    *安装Vant
    `npm i vant -S`

    *引入Vant
    `npm i babel-plugin-import -D`
    在.babelrc中配置plugins(插件)
    '{
        "plugins": [
            ["import", {
            "libraryName": "vant",
            "libraryDirectory": "es",
            "style": true
            }]
        ]
    }'

    *按需使用Vant组件
    配置好.babelrc后，就可以按需引用Vant框架了。
    `import Button from 'vant/lib/button';
    import 'vant/lib/vant-css/base.css';
    import 'vant/lib/vant-css/button.css';`

    *导入所有的组件
    `import Vue from 'vue';
    import Vant from 'vant';
    import 'vant/lib/vant-css/index.css';

    Vue.use(Vant);`
    
    *可以参考Vant官方文档
    ![Vant官方文档]{https://www.youzanyun.com/zanui/vant#/zh-CN/intro}


