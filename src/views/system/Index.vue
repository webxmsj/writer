<template>
  <div>
    <a-tabs defaultActiveKey="1">
      <a-tab-pane :tab="$t('language')" key="1">
        <language-setting></language-setting>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LanguageSetting from './includes/LanguageSetting.vue'

@Component({
  components: {
    LanguageSetting,
  },
})
export default class System extends Vue {

}
</script>

<style lang="less" scoped>
</style>
