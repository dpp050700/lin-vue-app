<template>
  <button 
    class="lin-button"
    :class="btnClass"
  >
     <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </button>
</template>

<script>
  const COMPONENT_NAME = 'lin-button';
  export default {
    name: COMPONENT_NAME,
    props: {
      icon: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'primary'
      },
      // mini,medium,large,long
      size: {
        type: String,
        default: 'long'
      },
      plain: {
        type: Boolean,
        default: false
      },
      shape: {
        type: String,
        default: 'circle'
      }
    },
    computed: {
      btnClass() {
        return {
          [`lin-button-size-${this.size}`]: true,
          [`lin-button-type-${this.type}`]: true
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../../common/styles/variable.less";
  .lin-button{
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-align: center;
    // border-radius: @button-border-radius;
    // transition: opacity @animation-duration-fast;
    -webkit-appearance: none;
    -webkit-text-size-adjust: 100%;
    &-size-mini{
      width: @button-mini-min-width;
      height: @button-mini-height;
      line-height: @button-mini-line-height;
      font-size: @button-mini-font-size;
    }
    &-size-medium{
     width: @button-medium-min-width;
      height: @button-medium-height;
      line-height: @button-medium-line-height;
      font-size: @button-medium-font-size;
    }
    &-size-large{
      width: @button-large-min-width;
      height: @button-large-height;
      line-height: @button-large-line-height;
      font-size: @button-large-font-size;
    }
    &-size-long{
      width: @button-long-width;
      height: @button-long-height;
      line-height: @button-long-line-height;
      font-size: @button-long-font-size;
    }
    &-type-primary{
      background: @btn-primary-bgc;
    }
  }
</style>
