<template>
  <div>
    图片上传
  </div>
</template>

<script lang="ts">
import { ipcRenderer, Event } from 'electron'
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class CommentSetting extends Vue {
  mounted() {
    console.log(1)
  }
}
</script>


<style lang="less" scoped>
</style>
