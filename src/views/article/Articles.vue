<template>
  <div class="articles-page">
    <a-row type="flex" justify="end" class="tool-container">
      <a-input-search
        class="search-input"
        :placeholder="$t('searchArticle')"
        style="width: 200px"
        @search="onSearch"
        v-model="keyword"
      />
      <a-button class="btn" type="danger" v-if="selectedRowKeys.length > 0" @click="deleteSelectedPosts">{{ $t('deleteSelected') }}</a-button>
      <a-button class="btn" type="primary" @click="newArticle">{{ $t('newArticle') }}</a-button>
    </a-row>
    <div class="content-container">
      <a-table
        :rowSelection="rowSelection"
        :columns="columns"
        :rowKey="record => record.fileName"
        :dataSource="postList"
        :pagination="{ size: 'small' }"
      >
        <a
          class="table-cell-link"
          href="javascript:;"
          slot="name"
          slot-scope="text, record"
          @click="editPost(record)"
        >{{ text }} <a-tag v-if="record.data.hideInList" color="orange">Hide</a-tag> </a>
        <a href="javascript:;" slot="autor" slot-scope="text">{{ text }}</a>
        <a-tag :class="{'tag-success': text, 'tag-draft': !text }" slot="status" :color="text ? '#d8f5ea': '#e8e8e8'" slot-scope="text">{{ text ? $t('published') : $t('draft') }}</a-tag>
        <span slot="date" slot-scope="text" class="post-date">{{ text }}</span>
      </a-table>
    </div>

    <fade-transition :duration="100">
      <article-update
        v-if="articleUpdateVisible"
        :visible="articleUpdateVisible"
        :articleFileName="currentArticleFileName"
        @close="close"
        @fetchData="$bus.$emit('site-reload')"
      ></article-update>
    </fade-transition>
  </div>
</template>

<script lang="ts">
import { ipcRenderer } from 'electron'
import { Vue, Component, Watch } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { FadeTransition } from 'vue2-transitions'
import { IPost } from '../../interfaces/post'
import ArticleUpdate from './ArticleUpdate.vue'

@Component({
  components: {
    ArticleUpdate,
    FadeTransition,
  },
})
export default class Articles extends Vue {
  @State('site') site!: any

  articleUpdateVisible = false

  currentArticleFileName = ''

  selectedRowKeys = []

  selectedPost = []

  keyword = ''

  get columns() {
    return [
      {
        title: this.$t('title'),
        key: 'data.title',
        dataIndex: 'data.title',
        scopedSlots: { customRender: 'name' },
      },
      {
        title: '创建人',
        dataIndex: 'data.autor',
        scopedSlots: { customRender: 'autor' },
        width: 100,
      },
      {
        title: this.$t('status'),
        dataIndex: 'data.published',
        scopedSlots: { customRender: 'status' },
        width: 100,
      },
      {
        title: this.$t('createAt'),
        dataIndex: 'data.date',
        scopedSlots: { customRender: 'date' },
        width: 185,
      },
    ]
  }

  get postList() {
    return [{
      content: 'asdf',
      fileName: 'mxf',
      data: {
        title: 'asdfasdf',
        date: '2019/06/10',
        published: true,
        hideInList: false,
        tags: ['1', '2'],
        feature: 'asdf',
        autor: 'mxf',
      },
    }]
    // return this.site.posts.filter((item: IPost) => item.data.title.toLowerCase().includes(this.keyword.toLowerCase()))
  }

  get rowSelection() {
    return {
      selectedRowKeys: this.selectedRowKeys,
      onChange: this.onSelectChange,
    }
  }

  onSelectChange(selectedRowKeys: any, selectedRows: any) {
    console.log(selectedRowKeys, selectedRows)

    this.selectedRowKeys = selectedRowKeys
    this.selectedPost = selectedRows
  }

  mounted() {
    this.$bus.$emit('site-reload')
  }

  close() {
    this.articleUpdateVisible = false
    this.currentArticleFileName = ''
  }

  newArticle() {
    this.articleUpdateVisible = true
    this.currentArticleFileName = ''
  }

  editPost(post: IPost) {
    this.articleUpdateVisible = true
    this.currentArticleFileName = post.fileName
  }

  async deletePost(post: IPost) {
    this.$confirm({
      title: `${this.$t('warning')}`,
      content: `${this.$t('deleteWarning')}`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: () => {
        ipcRenderer.send('app-post-delete', post)
        ipcRenderer.once('app-post-deleted', (event: Event, data: any) => {
          if (data) {
            this.$message.success(this.$t('articleDelete'))
            this.$bus.$emit('site-reload')
          }
        })
      },
    })
  }

  async deleteSelectedPosts() {
    this.$confirm({
      title: `${this.$t('warning')}`,
      content: `${this.$t('deleteWarning')}`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: () => {
        ipcRenderer.send('app-post-list-delete', this.selectedPost)
        ipcRenderer.once('app-post-list-deleted', (event: Event, data: any) => {
          console.log(data)
          if (data) {
            this.$bus.$emit('snackbar-display', this.$t('articleDelete'))
            this.$bus.$emit('site-reload')
            this.selectedPost = []
            this.selectedRowKeys = []
          }
        })
      },
    })
  }

  onSearch(val: any) {
    this.keyword = val
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/styles/var.less';

.articles-page {
  position: relative;
}
.post-date {
  color: #989898;
  font-size: 12px;
}

.tag-success {
  color: #0e4933;
}
.tag-draft {
  color: #4c4c4c;
}
</style>
