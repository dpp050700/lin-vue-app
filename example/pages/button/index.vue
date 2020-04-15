<template>
  <ComponentPage title="Button">
    <div slot="content">
      <lin-button size="mini">提交</lin-button>
      <lin-button size="medium">提交</lin-button>
      <lin-button size="large">提交</lin-button>
      <lin-button>提交</lin-button>
    </div>
  </ComponentPage>
</template>

<script>
import ComponentPage from '../../components/component-page'
export default {
  name: '',
  components: {
    ComponentPage
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>

</style>
