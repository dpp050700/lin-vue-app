import Vue from 'vue'
import Lin from '../src/index'
import App from './App.vue'

Vue.use(Lin)

new Vue({
  render(createElement) {
    return createElement(App)
  }
}).$mount('#app')
