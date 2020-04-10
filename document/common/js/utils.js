import {LANG_KEY} from '../config/index'

export function setItem(k, v) {
  window.localStorage.setItem(k, v)
}

export function getItem(k) {
  window.localStorage.getItem(k)
}

export function getCurrentLang() {
  const hash = window.location.hash
  const hashZhLang = hash.indexOf('/zh-') >= 0 ? 'zh-CN' : hash.indexOf('/en-') >= 0 ? 'en-US' : ''
  const lang = hashZhLang || getItem(LANG_KEY) || 'en-US'
  let defaultLang = 'en-US'
  if (lang.indexOf('zh-') >= 0) {
    defaultLang = 'zh-CN'
  }
  setItem(LANG_KEY, defaultLang)
  return defaultLang
}