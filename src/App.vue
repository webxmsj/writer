<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {

}
</script>
<style>

  /* Global CSS */
  body {
    background: #fff;
    color: #434343;
  }

  ::-webkit-scrollbar{
    width: 0px;
    height: 6px;
    border-radius: 4px;
    background-color: #fff;

  }
    /*滚动条两端的箭头*/
  ::-webkit-scrollbar-button{
    display: none;
  }
  ::-webkit-scroll-track{
    display: none;
  }
  ::-webkit-scrollbar-track-piece {
    display: none;
  }

  ::-webkit-scrollbar-thumb{
    background-color: #eee;
    opacity: 0.7;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-corner {
    display: none;
  }
  ::-webkit-resizer{
    display: none;
  }

  .github {
    font-size: 16px;
    margin-left: 16px;
    cursor: pointer;
  }

  .logo {
    user-select: none;
  }

  .application {
    font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Droid Sans,Helvetica Neue,Fira Sans,sans-serif!important;
  }
</style>
