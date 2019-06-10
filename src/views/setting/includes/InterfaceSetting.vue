<template>
  <div>
     <a-collapse accordion>
       <a-collapse-panel key="1">
          <template slot="header">
            <div class="panel-header">
              <span>接口根域名配置</span>
              <a-button size="small" @click.stop="submitData">提交</a-button>
            </div>
          </template>
          <a-input-group>
            <a-input style="width: 50%" defaultValue="请输入接口地址" />
          </a-input-group>
        </a-collapse-panel>

        <a-collapse-panel key="2">
          <template slot="header">
            <div class="panel-header">
              <span>文章</span>
              <a-button size="small" @click.stop="submitData">提交</a-button>
            </div>
          </template>
          <a-form
            :form="articleForm"
          >
            <a-form-item
              label="文章查询"
              :label-col="{ span: 2 }"
              :wrapper-col="{ span: 15 }"
            >
              <a-input-group>
                <a-input style="width: 50%" defaultValue="请输入接口地址">
                  <a-select slot="addonBefore" defaultValue="method">
                    <a-select-option value="Get">Get</a-select-option>
                    <a-select-option value="Post">Post</a-select-option>
                  </a-select>
                </a-input>
              </a-input-group>
            </a-form-item>

            <a-form-item
              label="新增文章"
              :label-col="{ span: 2 }"
              :wrapper-col="{ span: 15 }"
            >
              <a-input-group>
                <a-input style="width: 50%" defaultValue="请输入接口地址">
                  <a-select slot="addonBefore" defaultValue="method">
                    <a-select-option value="Get">Get</a-select-option>
                    <a-select-option value="Post">Post</a-select-option>
                  </a-select>
                </a-input>
              </a-input-group>
            </a-form-item>

            <a-form-item
              label="文章修改"
              :label-col="{ span: 2 }"
              :wrapper-col="{ span: 15 }"
            >
              <a-input-group>
                <a-input style="width: 50%" defaultValue="请输入接口地址">
                  <a-select slot="addonBefore" defaultValue="method">
                    <a-select-option value="Get">Get</a-select-option>
                    <a-select-option value="Post">Post</a-select-option>
                  </a-select>
                </a-input>
              </a-input-group>
            </a-form-item>

            <a-form-item
              label="文章删除"
              :label-col="{ span: 2 }"
              :wrapper-col="{ span: 15 }"
            >
              <a-input-group>
                <a-input style="width: 50%" defaultValue="请输入接口地址">
                  <a-select slot="addonBefore" defaultValue="method">
                    <a-select-option value="Get">Get</a-select-option>
                    <a-select-option value="Post">Post</a-select-option>
                  </a-select>
                </a-input>
              </a-input-group>
            </a-form-item>
          </a-form>
        </a-collapse-panel>
        <a-collapse-panel header="标签" key="3" :disabled='false'>
          <a-form
            :form="tagForm"
          >
            <a-form-item
              label="标签查询"
              :label-col="{ span: 2 }"
              :wrapper-col="{ span: 15 }"
            >
              <a-input-group>
                <a-input style="width: 50%" defaultValue="请输入接口地址">
                  <a-select slot="addonBefore" defaultValue="method">
                    <a-select-option value="Get">Get</a-select-option>
                    <a-select-option value="Post">Post</a-select-option>
                  </a-select>
                </a-input>
              </a-input-group>
            </a-form-item>

            <a-form-item
              label="新增标签"
              :label-col="{ span: 2 }"
              :wrapper-col="{ span: 15 }"
            >
              <a-input-group>
                <a-input style="width: 50%" defaultValue="请输入接口地址">
                  <a-select slot="addonBefore" defaultValue="method">
                    <a-select-option value="Get">Get</a-select-option>
                    <a-select-option value="Post">Post</a-select-option>
                  </a-select>
                </a-input>
              </a-input-group>
            </a-form-item>

            <a-form-item
              label="标签修改"
              :label-col="{ span: 2 }"
              :wrapper-col="{ span: 15 }"
            >
              <a-input-group>
                <a-input style="width: 50%" defaultValue="请输入接口地址">
                  <a-select slot="addonBefore" defaultValue="method">
                    <a-select-option value="Get">Get</a-select-option>
                    <a-select-option value="Post">Post</a-select-option>
                  </a-select>
                </a-input>
              </a-input-group>
            </a-form-item>

            <a-form-item
              label="标签删除"
              :label-col="{ span: 2 }"
              :wrapper-col="{ span: 15 }"
            >
              <a-input-group>
                <a-input style="width: 50%" defaultValue="请输入接口地址">
                  <a-select slot="addonBefore" defaultValue="method">
                    <a-select-option value="Get">Get</a-select-option>
                    <a-select-option value="Post">Post</a-select-option>
                  </a-select>
                </a-input>
              </a-input-group>
            </a-form-item>
          </a-form>
        </a-collapse-panel>
        <a-collapse-panel header="分类" key="4">
          <p>文章类目的管理 (增、删、改、查)</p>
        </a-collapse-panel>
        <a-collapse-panel header="授权" key="5">
          <p>是否需要登录获取token，方可管理</p>
        </a-collapse-panel>
        <a-collapse-panel header="绑定" key="6">
          <p>与第三方平台的账户绑定，已进行相应的管理</p>
        </a-collapse-panel>
      </a-collapse>
  </div>
</template>

<script lang="ts">
import { ipcRenderer, Event } from 'electron'
import {
  Vue,
  Component,
  Watch,
  Provide,
} from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component
export default class InterfaceSetting extends Vue {
  // data
  @Provide() method = 'Get'

  @Provide() articleForm = this.$form.createForm(this)

  @Provide() tagForm = this.$form.createForm(this)

  // methods
  submitData() {
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
