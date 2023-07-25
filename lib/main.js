import {createApp} from "vue"
import confirm from './Confirm.vue'

function Install(App, options = {}) {
  const property = options.property || '$confirm'
  delete options.property
  const vuetify = options.vuetify
  delete options.vuetify
  if (!vuetify) {
    console.warn('Module vuetify3-confirm needs vuetify instance. Use Vue.use(Vuetify3Confirm, { vuetify })')
  }

  // 创建一个dom节点
  const div = document.createElement('div')
  div.setAttribute('class', 'confirm-container')
  div.setAttribute('id', 'confirm-container')
  // 挂载到body就可以在最顶层直接控制显示隐藏
  document.body.appendChild(div)
  function show(message, options = {}) {
    options.message = message;
    /**
     * Confirm有两种状态, 确认和取消
     *  确认: 返回reslove(), 给confirm组件添加确认时方法
     *  取消: reject()
     */
    return new Promise((reslove, reject) => {

      // 封装组件属性方法
      const submitCallback = () => {
        //调用完毕后应该清空节点
        app.unmount('#confirm-container')
        reslove(true)
      }

      // 封装组件属性方法
      const cancelCallback = () => {
        //清空节点
        app.unmount('#confirm-container')
        reslove(false)
      }
      options.submitCallback = submitCallback;
      options.cancelCallback = cancelCallback;
      let app = createApp(confirm, options);
      app.use(vuetify);
      app.mount('#confirm-container')
    })
  }

  App.config.globalProperties[property] = show
  App.config.globalProperties[property].options = options || {}
}

export default Install

