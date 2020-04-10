<template>
  <div class="lin-doc-content">
    <div class="nav-list-wrapper">
      <side-list :nav-list="navList"></side-list>
    </div>
    <router-view class="page-doc md-body"></router-view>
  </div>
</template>

<script lang="ts">

  const enum Lang {
    "en-US" = 'en-US',
    "zh-CN" = 'zh-CN'
  }

  interface Props {
    lang: Lang
  }

  import menuConfig from '../../common/config/menu'
  import {LANG_KEY} from '../../common/config/index'
  import SideList from '../sideList/sideList.vue'
  import { computed, watch, onMounted, defineComponent,reactive, toRefs } from '@vue/composition-api'
  
  export default defineComponent({
    name: 'Content',
    props: {
      lang: {
        type: String,
        default: 'zh-CN'
      }
    },
    components: {
      SideList
    },
    setup(props: Props, context: any) {
      console.log(props)
      const state = reactive({
        navList: menuConfig[props.lang]
      })

      return {
        ...toRefs(state)
      }
    }
  })
</script>

<style lang="less">
  .lin-doc-content{
    display: flex;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .nav-list-wrapper{
      width: 279px;
      height: 100%;
      border-right: 1px solid #e3e3e3;
    }
    .page-doc{
      height: 100%;
      padding: 54px 30px 30px;
      box-sizing: border-box;
      overflow-y: auto;
      flex: 1;
    }
  }
</style>
