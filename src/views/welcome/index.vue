<template>
  <div>
    <a-button type="primary">Primary</a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="danger">Danger</a-button>
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
      name: 'asdf',
    }
  },
}
</script>

<style lang="less">
/* For demo */
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
