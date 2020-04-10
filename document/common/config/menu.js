const menuConfig = {
  "en-US": {
    essentials: {
      name: 'Essentials',
      angle: "01",
      subList: {
        introduction: "Introduction",
        quickStart: "QuickStart",
        Changelog: "Changelog",
        theme: 'Custom Theme',
        internationalization : 'Internationalization'
      }
    },
    components: {
      name: "Components",
      angle: "02",
      subList: {
        basic: {
          name: "Basic",
          subList: {
            button: "Button",
          }
        }
      }
    },
  },
  "zh-CN": {
    essentials: {
      name: '开发指南',
      angle: "01",
      subList: {
        introduction: "介绍",
        quickStart: "快速上手",
        changelog: "更新日志",
        theme: '定制主题',
        internationalization : '国际化'
      }
    },
    components: {
      name: "组件",
      angle: "02",
      subList: {
        basic: {
          name: "基础",
          subList: {
            button: "Button",
          }
        }
      }
    },
  }
}

export default menuConfig;