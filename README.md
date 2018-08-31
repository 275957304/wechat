# wepy demo
https://tencent.github.io/wepy/ 该框架是腾讯内部基于小程序的开发框架，设计思路基本参考VUE，开发模式和编码风 格上80%以上接近VUE. 优势:组件化开发

>tw wepy project

## Build Setup

``` bash
# 安装依赖
npm install

# 开启实时编译
wepy build --watch


## 代码高亮
VS Code
>在插件目录搜索安装 vetur，点击 VS Code 右下角的语言，选择 “.wpy” 的配置文件关联，然后选择 Vue，即可启动代码高亮。


#### 开发使用说明
- 使用微信开发者工具新建项目，本地开发选择 dist 目录。
- **【重要】**微信开发者工具 --> 项目 --> 关闭 ES6 转 ES5。
- 本地项目根目录运行 wepy build --watch，开启实时编译。
- 使用wepy框架 务必将开发者工具中 �关闭关闭ES6转ES5 关闭上传代码时样式自动补全 关闭代码压缩上传
- 标签闭合不正确 经常会导致 找不到页面 File not found: ./../../components/matchActive.wxss一般问题出在他本身或者他所引用的组件的标签没有闭合 导致 解析文件css 或者 js出错
- 父子组件动态传参 传参方和受参方 设置一定�要注意，type写错 可能会收不到参数 而报错 如 Right-hand side of 'instanceof' is not an object
- 同一个组件 被多次引用 组件中的Data是共用的，一个引用的地方改变了他 会影响到其他组件，所以要想私有化 可以通过props 或者 引用的时候起个别名 实现
- 组件引用错误 或者引用没有被定义的组件 可能会报错 如下 unexpected attribute name, near .sync
- 尽量少用watch 比较容易出现没有按照预期更改的现象 尤其是当出现循环引用 的时候，另外 watch中改变组件Data后 要用this.$apply()使其生效
- 异步函数中 改变Data this.$apply()使其生效
- 路由栈 只是针对单个的tabBar的 �拿不到其他tab的栈信息
- 生命周期是个需要慢慢琢磨的东西

``` bash
使用微信开发者工具新建项目，本地开发选择 dist 目录
微信开发者工具 -> 项目
o	关闭 ES6 转 ES5
o	关闭 代码压缩上传
o	关闭 上传代码时样式文件自动补全
o	开启 开发环境不校验请求域名、TLS版本以及HTTPS证书
```


## 经踩过的坑
###标签中的指令简写
•跟Vue类似
•对于动态赋值的属性可以使用 :attr="value" 的方式
•对于绑定事件可以使用@click="fn"的方式

###data使用注意点
•对于视图中需要用到的数据，应该事先在data中定义一下，哪怕此时没有数据，也应该定义一个空值

###WePY中的methods的使用
•只能声明页面的bind、catch事件，不能声明自定义方法
•自定义方法应该跟methods平级

###页面跳转
•navigateTo() 和 redirectTo() 不允许跳转到 tabbar 页面，
•只能用 switchTab() 跳转到 tabbar 页面

###文件上传
•上传文件没有传统html中的文件域(<input type="file"/>)，要想上传文件只能使用API： uploadFile()

###更新DOM$apply
•如果需要更新DOM，应该在随后调用组件实例的$apply方法，才能更新到页面中
this.name="abc";
this.$apply()
•PS：对于性能要求较高的应用，不要频繁的调用$apply()更新DOM，可以根据实际情况更新

###父组件向子组件传递数据，通过prop的方式传递
•如果需要传递动态数据，需要.sync修饰符
•如果需要子组件数据同步到父组件，需要在定义prop的时候设置twoWay:true

###mixin
•wepy的mixin，与vue中的mixin执行顺序相反
•wepy中，会先执行组件自身的，再执行mixin中的
•vue中对于钩子函数，会先执行mixin中的，再执行组件自身的；vue中methods如果和mixin同名，那么只会执行自身的方法

###关于canvas和base64
•小程序中可以进行canvas相关操作，但是跟纯html中的canvas有所不同（api差异），canvas的使用都应该参照：小程序中的canvas

###arrayBuffer和base64互转
•本段内容在文档中是搜索不到的，但是确实是支持的，使用如下2种方式：
•wx.arrayBufferToBase64(arrayBuffer)
•wx.base64ToArrayBuffer(base64)

###命名规范
•小程序内部定义的实例API都以$开头，所以我们在定义实例属性、方法的时候不能以$开头，以便区分






