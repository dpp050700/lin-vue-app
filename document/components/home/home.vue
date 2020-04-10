<template>
  <div class="lin-doc">
    <div class="lin-doc-header">
      <div class="lin-doc-header-logo">
        111
        <!-- <img src="../../../asstes/images/logo.png"> -->
      </div>
      <div class="lin-doc-header-nav">
        <ul>
          <li>Github</li>
          <li><lang /></li>
        </ul>
      </div>
    </div>
    <div class="lin-router-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, watch, onMounted, defineComponent } from '@vue/composition-api'
  import Lang from '../lang/lang.vue'
  export default defineComponent({
    name: 'APP',
    components: {
      Lang
    },
    setup(props: {}, context: any) {
      const btnClass = computed(() => ({
        
      }))

      return {
        btnClass
      }
    }
  })
</script>

<style lang="less">
  .lin-doc{
    height: 100%;
    box-sizing: border-box;
    padding-top: 61px;
    transition: all 250ms ease;
    .lin-doc-header{
      z-index: 5;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      line-height: 60px;
      padding: 0 100px;
      margin-top: 0;
      background-color: #fff;
      border-bottom: 1px solid #eaecef;
      box-shadow: 0 0 5px #eaecef;
      display: flex;
      .lin-doc-header-logo{

      }
      .lin-doc-header-nav{
        flex: 1;
        &>ul{
          list-style: none;
          display: flex;
        }
      }
    }
    .lin-router-content{
      height: 100%;
    }
  }
</style>
