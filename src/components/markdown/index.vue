<template>
  <div
    ref="markdown"
    :class="isFullscreen?'markdown fullscreen':'markdown' "
    :style="{width:editorWidth+'px',height:editorHeight+'px'}"
  >
    <!-- 头部工具栏 -->
    <ul
      v-if="showTools"
      class="markdown-toolbars"
    >
      <li><slot name="title" /></li>
      <li
        v-if="tools.strong"
        name="粗体"
      >
        <span
          class="iconfont icon-strong"
          @click="insertStrong"
        />
      </li>
      <li
        v-if="tools.italic"
        name="斜体"
      >
        <span
          class="iconfont icon-italic"
          @click="insertItalic"
        />
      </li>
      <li
        v-if="tools.overline"
        name="删除线"
      >
        <span
          class="iconfont icon-overline"
          @click="insertOverline"
        />
      </li>
      <li
        v-if="tools.h1"
        name="标题1"
      >
        <span
          style="font-size: 16px;"
          @click="insertTitle(1)"
        >h1</span>
      </li>
      <li
        v-if="tools.h2"
        name="标题2"
      >
        <span
          style="font-size: 16px;"
          @click="insertTitle(2)"
        >h2</span>
      </li>
      <li
        v-if="tools.h3"
        name="标题3"
      >
        <span
          style="font-size: 16px;"
          @click="insertTitle(3)"
        >h3</span>
      </li>
      <li
        v-if="tools.h4"
        name="标题4"
      >
        <span
          style="font-size: 16px;"
          @click="insertTitle(4)"
        >h4</span>
      </li>
      <li
        v-if="tools.h5"
        name="标题5"
      >
        <span
          style="font-size: 16px;"
          @click="insertTitle(5)"
        >h5</span>
      </li>
      <li
        v-if="tools.h6"
        name="标题6"
      >
        <span
          style="font-size: 16px;"
          @click="insertTitle(6)"
        >h6</span>
      </li>
      <li
        v-if="tools.hr"
        name="分割线"
      >
        <span
          class="iconfont icon-horizontal"
          @click="insertLine"
        />
      </li>
      <li
        v-if="tools.quote"
        name="引用"
      >
        <span
          style="font-size: 16px;"
          class="iconfont icon-quote"
          @click="insertQuote"
        />
      </li>
      <li
        v-if="tools.ul"
        name="无序列表"
      >
        <span
          class="iconfont icon-ul"
          @click="insertUl"
        />
      </li>
      <li
        v-if="tools.ol"
        name="有序列表"
      >
        <span
          class="iconfont icon-ol"
          @click="insertOl"
        />
      </li>
      <li
        v-if="tools.code"
        name="代码块"
      >
        <span
          class="iconfont icon-code"
          @click="insertCode"
        />
      </li>
      <li
        v-if="tools.notChecked"
        name="未完成列表"
      >
        <span
          class="iconfont icon-checked-false"
          @click="insertNotFinished"
        />
      </li>
      <li
        v-if="tools.checked"
        name="已完成列表"
      >
        <span
          class="iconfont icon-checked"
          @click="insertFinished"
        />
      </li>
      <li
        v-if="tools.link"
        name="链接"
      >
        <span
          class="iconfont icon-link"
          @click="insertLink"
        />
      </li>
      <li
        v-if="tools.image"
        name="图片"
      >
        <span
          class="iconfont icon-img"
          @click="insertImage"
        />
      </li>
      <li
        v-if="tools.table"
        name="表格"
      >
        <span
          class="iconfont icon-table"
          @click="insertTable"
        />
      </li>
      <li
        v-if="tools.print"
        name="打印"
      >
        <span
          class="iconfont icon-dayin"
          @click="print"
        />
      </li>
      <li
        v-if="tools.theme"
        class="shift-theme"
        name="代码块主题"
      >
        <div>
          <span
            class="iconfont icon-yanse"
            @click="themeSlideDown=!themeSlideDown"
          />
          <ul
            :class="{active:themeSlideDown}"
            @mouseleave="themeSlideDown=false"
          >
            <li
              @click="setThemes('Light')"
            >
              Light
            </li>
            <li
              @click="setThemes('Dark')"
            >
              VS Code
            </li>
            <li
              @click="setThemes('OneDark')"
            >
              Atom OneDark
            </li>
            <li
              @click="setThemes('GitHub')"
            >
              GitHub
            </li>
          </ul>
        </div>
      </li>
      <li
        v-show="tools.importmd"
        name="导入本地文件"
        class="import-file"
      >
        <span
          class="iconfont icon-daoru"
          @click="importFile"
        />
        <input
          type="file"
          accept="text/markdown"
          @change="importFile($event)"
        >
      </li>
      <li
        v-show="tools.exportmd"
        name="保存到本地"
      >
        <span
          class="iconfont icon-download"
          @click="exportMd"
        />
      </li>
      <li
        v-if="tools.shift&&preview==2"
        name="全屏编辑"
      >
        <span
          class="iconfont icon-md"
          @click="preview=3"
        />
      </li>
      <li
        v-if="tools.shift&&preview==3"
        name="分屏显示"
      >
        <span
          class="iconfont icon-group"
          @click="preview=1"
        />
      </li>
      <li
        v-if="tools.shift&&preview==1"
        name="预览"
      >
        <span
          class="iconfont icon-preview"
          @click="preview=2"
        />
      </li>
      <li
        :name="scrolling?'同步滚动:开':'同步滚动:关'"
      >
        <span
          v-show="scrolling"
          class="iconfont icon-on"
          @click="scrolling=!scrolling"
        />
        <span
          v-show="!scrolling"
          class="iconfont icon-off"
          @click="scrolling=!scrolling"
        />
      </li>
      <li class="empty" />

      <li
        v-if="tools.fullscreen&&!isFullscreen"
        name="全屏"
      >
        <span
          class="iconfont icon-full-screen"
          @click="isFullscreen=!isFullscreen"
        />
      </li>
      <li
        v-if="tools.fullscreen&&isFullscreen"
        name="退出全屏"
      >
        <span
          class="iconfont icon-exit-full-screen"
          @click="isFullscreen=!isFullscreen"
        />
      </li>
    </ul>
    <!-- 编辑器 -->
    <div
      class="markdown-content"
      :style="{background:preview==2?'#fff':''}"
    >
      <div
        v-show="preview===1||preview===3"
        ref="markdownContent"
        class="markdown-editor"
        @scroll="markdownScroll"
        @mouseenter="mousescrollSide('markdown')"
      >
        <ul
          ref="index"
          class="index"
          :style="{height:scrollHeight?`${scrollHeight}px`:'100%'}"
        >
          <li
            v-for="(item,index) in indexLenth"
            :key="index"
          >
            {{ index+1 }}
          </li>
        </ul>
        <textarea
          ref="textarea"
          v-model="value"
          :style="{height:scrollHeight?`${scrollHeight}px`:'100%'}"
          @keydown.tab="tab"
          @keyup.enter="enter"
          @keyup.delete="onDelete"
        />
      </div>
      <!-- <div v-show="preview==1" class="empty" style="width:12px;"></div> -->
      <div
        v-show="preview===1||preview===2"
        ref="preview"
        :class="`markdown-preview ${themeName}`"
        @scroll="previewScroll"
        @mouseenter="mousescrollSide('preview')"
      >
        <div
          ref="previewInner"
          v-html="html"
        />
      </div>
      <div
        id="marked-mathjax-preview"
        class="preview"
      />
      <div
        id="marked-mathjax-preview-buffer"
        class="preview"
        style="display:none;position:absolute;top:0; left: 0"
      />
    </div>
    <!--    预览图片-->
    <div
      :class="['preview-img',previewImgModal?'active':'']"
    >
      <span
        class="close"
        @click="previewImgModal=false"
      >
        关闭
      </span>
      <img
        :src="previewImgSrc"
        :class="[previewImgMode]"
        alt=""
      >
    </div>
  </div>
</template>

<script>
import markdown from './markdown'

export default markdown
</script>

<style lang="less">
  @import "./font/iconfont.css";
  @import "./css/theme";
  @import "./css/light";
  @import "./css/dark";
  @import "./css/one-dark";
  @import "./css/gitHub";
  @import "./css/index";
</style>
