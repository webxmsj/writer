<template>
  <a-layout>
    <a-layout-sider
      class="sider"
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    >
      <div class="top-container">
        <div class="logo">
          <img class="img" src="@/assets/writers.png">
          <h3>Writer</h3>
        </div>
        <a-menu mode="inline" :defaultSelectedKeys="['articles']" @click="clickMenu">
          <a-menu-item key="articles">
            <a-icon type="file-text" />
            <span class="nav-text">{{ $t('article') }}</span>
          </a-menu-item>
          <a-menu-item key="category">
            <a-icon type="bars" />
            <span class="nav-text">{{ $t('category') }}</span>
          </a-menu-item>
          <a-menu-item key="tags">
            <a-icon type="tags" />
            <span class="nav-text">{{ $t('tag') }}</span>
          </a-menu-item>
          <a-menu-item key="role">
            <a-icon type="setting" />
            <span class="nav-text">{{ $t('role') }}</span>
          </a-menu-item>
          <a-menu-item key="setting">
            <a-icon type="setting" />
            <span class="nav-text">{{ $t('setting') }}</span>
          </a-menu-item>
          <a-menu-item key="system">
            <a-icon type="desktop" />
            <span class="nav-text">{{ $t('system') }}</span>
          </a-menu-item>
          <a-menu-item key="test">
            <a-icon type="desktop" />
            <span class="nav-text">测试</span>
          </a-menu-item>
        </a-menu>
      </div>
      <div class="bottom-container">
        <a-button class="preview-btn" icon="eye" block>赏</a-button>
        <div class="version-container" :class="{ 'version-dot': hasUpdate }">
          <span>- {{ version }}</span>
          <a-tooltip title="🌟Star 支持作者！">
            <a-icon type="github" style="font-size: 14px; cursor: pointer;" @click="openInBrowser('https://github.com/webxmsj/writers')" />
          </a-tooltip>
        </div>
      </div>
    </a-layout-sider>
    <a-layout class="right-container">
      <div class="content">
        <router-view></router-view>
      </div>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { ipcRenderer, Event, shell } from 'electron'
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'
import { State, Action } from 'vuex-class'
import ISnackbar from '../interfaces/snackbar'
import { Site } from '../store/modules/site'
import * as pkg from '../../package.json'

@Component
export default class App extends Vue {
  @State('site') site!: any

  @Action('site/updateSite') updateSite!: (siteData: Site) => void

  ipcRenderer = ipcRenderer

  version = (pkg as any).version

  drawer = true

  publishLoading = false

  hasUpdate = false

  newVersion = ''

  clickMenu(e: any) {
    this.$router.push(e.key)
  }

  openInBrowser(url: string) {
    shell.openExternal(url)
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/styles/var.less';

.logo {
  min-height: 64px;
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 32px 0 16px;
  h3 {
    color: @primary-color;
    font-size: 18px;
    transform: translateY(8px);
    // background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(250, 250, 250, 1)), to(rgba(255, 255, 255, 0.4)));
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
  }
  .img {
    width: 64px;
    height: 64px;
    border-radius: 16px;
  }
}
.sider {
  background: @primary-bg;
  // background: linear-gradient(to bottom, #434343, #000000);
}

/deep/ .ant-menu {
  background: @primary-bg;
  color: @primary-color;
}

/deep/ .ant-menu-vertical .ant-menu-item:after, .ant-menu-vertical-left .ant-menu-item:after, .ant-menu-vertical-right .ant-menu-item:after, .ant-menu-inline .ant-menu-item:after {
  border-right: none;
}

/deep/ .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: #efebe3;
}

/deep/ .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
  border-right: none;
}

/deep/ .ant-layout-sider-children {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bottom-container {
  padding: 24px 32px 8px;
  button {
    margin: 4px 0;
  }
}

.right-container {
  background: #fff;
  margin-left: 8px 8px 8px 208px;
  padding: 8px;
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 208px;
  right: 8px;
}
.version-container {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  align-items: center;
  position:relative;
  font-size: 12px;
  &.version-dot {
    &:before {
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      background: red;
      border-radius: 2px;
      position: absolute;
      top: 51%;
      left: -12px;
      transform: translateY(-50%);
    }
  }
}

.preview-btn {
  border-radius: 16px;
  background: #e8e8e8;
  &:hover {
    border: none;
    background: #c7c7c7;
  }
}

.publish-btn {
  border-radius: 16px;
  background: #383838;
  color: #bababa;
  border: none;
  &:hover {
    background: #252525;
    border: none;
  }
}
</style>
