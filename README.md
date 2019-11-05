用于基于服务端渲染next.js开发的项目；

项目主要目录

├─.next
│  
├─components //基础组件
├─node_modules
│  
├─pages //路由跳转的页面都在此处，index作为入口
|─static //静态资源存放
|   └─images
|——next.config.js //项目配置文件，可自定义webpack配置
|
|
|
|

项目初始安装依赖包：yarn install；
开发环境服务开启：yarn run dev；
打包生产环境代码： yarn run build；
启动项目： yarn run start；
静态页面产出： yarn run export；
