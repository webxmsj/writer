<template>
  <div class="">
    <a-tabs defaultActiveKey="1">
      <a-tab-pane :tab="$t('interfaceSetting')" key="1">
        <interface-setting></interface-setting>
      </a-tab-pane>
      <a-tab-pane :tab="$t('pictureUpload')" key="2">
        <picture-upload></picture-upload>
      </a-tab-pane>
      <a-tab-pane :tab="$t('avatarSetting')" key="4">
        <avatar-setting></avatar-setting>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { ipcRenderer, Event } from 'electron'
import { Vue, Component } from 'vue-property-decorator'
import { State } from 'vuex-class'
import InterfaceSetting from './includes/InterfaceSetting.vue'
import PictureUpload from './includes/PictureUpload.vue'
import AvatarSetting from './includes/AvatarSetting.vue'

@Component({
  components: {
    InterfaceSetting,
    PictureUpload,
    AvatarSetting,
  },
})
export default class Setting extends Vue {

}
</script>

<style lang="less" scoped>

</style>
