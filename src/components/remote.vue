// RemoteBaseComponent.vue
<template>
  <component :is="mode" v-bind="$attrs"></component>
</template>

<script>
import { markRaw } from 'vue';
import {applyPureReactInVue} from 'veaury'

export default {
  name: 'RemoteBaseComponent',
  props: {
    type: String,
  },
  data() {
    return {
      mode: ''
    }
  },
  inheritAttrs: false,
  mounted() {
    this.loadScript().then(() => {
      // 将组件的选项对象赋值给mode
      this.mode = applyPureReactInVue(markRaw(window.MyComponent.default));
    })
  },
  methods: {
    loadScript() {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        const target = document.getElementsByTagName('script')[0] || document.head;
        script.type = 'text/javascript';
        script.src = 'http://192.168.110.83:8080/user1/index.js';
        script.onload = resolve;
        script.onerror = reject;
        target.parentNode.insertBefore(script, target)
      })
    }
  }
}
</script>