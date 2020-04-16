<template>
    <i :class="icon"></i>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { computed, watch, onMounted, defineComponent } from '@vue/composition-api'
  import VueCompositionApi from '@vue/composition-api'
  Vue.use(VueCompositionApi)
  
  const COMPONENT_NAME = 'lin-icon';

  interface Props {
    name: string,
  }

  export default defineComponent({
    name: COMPONENT_NAME,
    props: {
      name: {
        type: String,
        default: ''
      }
    },
    setup(props: Props, context: any) {
      const icon = computed(() => ({
        [`lin-icon-${props.name}`]: true,
      }))

      return {
        icon
      }
    }
  })
</script>

<style lang="less">
  @import "../../common/styles/icon.less";
</style>
