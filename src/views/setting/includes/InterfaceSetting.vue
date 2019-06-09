<template>
  <div>
     <a-collapse accordion>
        <a-collapse-panel key="1">
          <template slot="header">
            <div class="panel-header">
              <span>文章</span>
              <a-button size="small" @click.stop="submitData">提交</a-button>
            </div>
          </template>
          <a-input-group compact>
            <a-select defaultValue="Option1">
              <a-select-option value="Option1">Option1</a-select-option>
              <a-select-option value="Option2">Option2</a-select-option>
            </a-select>
            <a-input style="width: 50%" defaultValue="input content" />
          </a-input-group>
        </a-collapse-panel>
        <a-collapse-panel header="标签" key="2" :disabled='false'>
          <p>文章所属标签管理(增、删、改、查)</p>
        </a-collapse-panel>
        <a-collapse-panel header="分类" key="3">
          <p>文章类目的管理 (增、删、改、查)</p>
        </a-collapse-panel>
        <a-collapse-panel header="授权" key="4">
          <p>是否需要登录获取token，方可管理</p>
        </a-collapse-panel>
        <a-collapse-panel header="绑定" key="5">
          <p>与第三方平台的账户绑定，已进行相应的管理</p>
        </a-collapse-panel>
      </a-collapse>
  </div>
</template>

<script lang="ts">
import { ipcRenderer, Event } from 'electron'
import { Vue, Component, Watch } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component
export default class InterfaceSetting extends Vue {
  text = 'asdf'

  private submitData() {
    console.log(1)
  }
}
</script>


<style lang="less" scoped>
.icon {
  cursor: pointer;
}
.panel-header{
  display: flex;
  justify-content: space-between;
}
</style>
