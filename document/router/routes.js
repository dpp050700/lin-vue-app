import menus from '../common/config/menu'
const routeMap = {}

Object.keys(menus).forEach(lang => {
  const docsChildrenRoute = []
  const docsRoute = {
    path: 'docs',
    redirect: './docs/introduction',
    component: () => import(`../components/docs/${lang}.vue`),
    children: docsChildrenRoute
  }

  routeMap[lang] = [docsRoute]
  const groups = menus[lang]

  Object.keys(groups).forEach((name) => {
    getSubList(groups[name]).forEach((key) => {
      docsChildrenRoute.push({
        path: key,
        // component: {
        //   template: '<div>11112</div>'
        // }
        // component: () => import(`../components/docs/${lang}/button.md`)
      })
    })
  })
})

function getSubList (group) {
  let subList = []
  Object.keys(group.subList).forEach((key) => {
    const item = group.subList[key]
    if (typeof item === 'string') {
      subList.push(key)
    } else {
      subList = subList.concat(getSubList(item))
    }
  })
  return subList
}

export default routeMap