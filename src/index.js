import {
  Style,
  Button
} from './modules'
import { processComponentName } from './common/helpers/utils'

const components = [
  // basic
  Button
]

function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  components.forEach((Component) => {
    Component.install(Vue)
  })
}

const Lin = {
  /* eslint-disable no-undef */
  version: '0.0.1',
  install
}

components.forEach((Component) => {
  const name = processComponentName(Component, {
    firstUpperCase: true
  })
  Lin[name] = Component
})

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
}

export default Lin
