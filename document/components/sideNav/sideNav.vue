<template>
  <ul class="nav-ul">
    <li class="nav-li" v-for="(item, key) in list" :key="key" :class="{'nav-li-open': item.isOpend, 'nav-li-active': item.isActived}">
      <template v-if="item.name">
        <div class="nav-name" @click="open(item)">
          {{item.name}}
          <div v-if="item.angle" class="arrow" ></div>
        </div>
        <side-nav :list="item.subList"></side-nav>
      </template>
      <router-link
        active-class="nav-active"
        :to="{path: key}"
        v-else
      >{{item}}</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
  interface Props {
    list: object
  }
  import { computed, watch, onMounted, defineComponent } from '@vue/composition-api'
  
  export default defineComponent({
    name: 'SideNav',
    props: {
      list: {
        type: Object,
        default: () => ({})
      }
    },
    setup(props: Props, context: any) {
      const open = (item: any) => {
        let isOpend = item.isOpend
        context.root.$set(item, 'isOpend', !isOpend)
        console.log(context)
      }
      return {
        open
      }
    }
  })
</script>

<style lang="less">
  .nav-ul{
    .nav-li{
      position: relative;
      overflow: hidden;
      .nav-name{
        font-size: 24px;
        border-bottom: 1px solid #e3e3e3;
        padding: 15px 0 15px 30px;
        margin-left: 30px;
        margin-right: 30px;
        cursor: pointer;
        position: relative;
      }
      .arrow{
        width: 10px;
        height: 10px;
        position: absolute;
        top: 23px;
        right: 16px;
        transition: all .3s;
        &::before, &::after{
          width: 0;
          height: 0;
          content: "";
          border: 5px solid transparent;
          border-top: 5px solid #fff;
          position: absolute;
        }
        &::before{
          border-top-color: #333;
          top: 2px
        }
      }
      & >.nav-ul {
        display: none;
        .nav-li{
          text-indent: 60px;
          line-height: 30px;
          .nav-li{
            text-indent: 80px;
          }
          .nav-name{
            font-size: 1.125em;
            border: none;
            padding: 0;
            margin: 0;
            line-height: 50px;
            color: #969799;
          }
          a{
            display: block;
            padding: 5px 0px;
            box-sizing: border-box;
            color: #666;
          }
        }
      }
    }
    .nav-li-open{
      .nav-ul{
        display: block;
      }
    }
  }
</style>
