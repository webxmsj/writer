<template>
  <div>
    <a-row>
      <a-col :span="12">col-12</a-col>
      <a-col :span="12">col-12</a-col>
    </a-row>
    <a-row>
      <a-col :span="8">col-8</a-col>
      <a-col :span="8">col-8</a-col>
      <a-col :span="8">col-8</a-col>
    </a-row>
    <a-row>
      <a-col :span="6">col-6</a-col>
      <a-col :span="6">col-6</a-col>
      <a-col :span="6">col-6</a-col>
      <a-col :span="6">col-6</a-col>
    </a-row>
    <div>
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="danger">Danger</a-button>
    </div>
    <a-breadcrumb>
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
      <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
      <a-breadcrumb-item>An Application</a-breadcrumb-item>
    </a-breadcrumb>
    <a-button icon="search" @click="goWrite">去编辑</a-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Guide extends Vue {
  public goWrite() {
    this.$router.push('/main/articles')
  }
}
</script>
