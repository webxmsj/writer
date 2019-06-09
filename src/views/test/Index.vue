<template>
  <div>
    <!-- <m-markdown
      :show-tools="false"
      :height="770"
      :theme="theme"
      :initial-value="initialValue"
      @on-save="save"
    /> -->
    <a-carousel arrows>
    <div
      slot="prevArrow"
      class="custom-slick-arrow"
      style="left: 10px;zIndex: 1"
    >
      <a-icon type="left-circle" />
    </div>
    <div
      slot="nextArrow"
      class="custom-slick-arrow"
      style="right: 10px"
    >
      <a-icon type="right-circle" />
    </div>
    <div><h3>1asdf</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: 'oneDark',
      initialValue: '',
    }
  },
  methods: {
    save(res) {
      console.log(res)
    },
  },
}
</script>

<style lang="less" scoped>
/deep/ .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

/deep/ .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31,45,61,.11);
  opacity: 0.3;
}
/deep/ .custom-slick-arrow:before {
  display: none;
}
/deep/ .custom-slick-arrow:hover {
  opacity: 0.5;
}

/deep/ .slick-slide  h3 {
  color: #fff;
}
</style>
