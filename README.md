## 搭建一个react-redux的项目
1、导入`reselect`作为selector的包、selector具有缓存的操作.
2、导入 `react-redux` 将react与redux连接起来
3、导入 `redux` 全局状态管理. 
4、导入 `redux-thunk` action和store中间是通过dispatch方法连接的.redux-thunk主要的功能就是可以让我们dispatch一个函数.
Redux：是核心库，功能简单，只是一个单纯的状态机，但是蕴含的思想不简单，是传说中的“百行代码，千行文档”。
React-Redux：是跟React的连接库，当Redux状态更新的时候通知React更新组件。
Redux-Thunk：提供Redux的异步解决方案，弥补Redux功能的不足。
但是我们的应用里面经常会有定时器，网络请求等等异步操作，使用Redux-Thunk就可以发出异步的action： 最主要的功能就是可以让我们dispatch一个函数

