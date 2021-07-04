import Scrollbar from './plugin/scrollbar/index.js'

export default ({ Vue, options, router }) => {
  // Vue.config.errorHandler = function (err, vm, info) {
  //   // 捕获 Vue 中的错误，集中处理
  //   console.dir('error: ' + err.message)
  // }
  Vue.use(Scrollbar)
};