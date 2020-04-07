import Vue from 'vue'

declare class LinUIComponent extends Vue {
  static install (vue: typeof Vue): void
}

type Component = LinUIComponent


export class LinButton extends LinUIComponent {}