<template>
  <!-- 脚部 -->
  <div class="foot">
    <div class="footcontent">
      <div class="footcontent_left">
        <p>
          苏州工业园区测绘地理信息有限公司
          苏州工业园区苏虹中路101号
        </p>
      </div>
      <div class="footcontent_center">
        <img src="../../assets/imgs/home/logo_bottom.png" alt />
      </div>
      <div class="footcontent_right">
        <a href="http://www.beian.miit.gov.cn">
          Copyright © 2002-2017 All Rights Reserved.
          ICP备案序号：苏ICP备10213963号
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.foot {
  width: 100%;
  height: 100px;
  background-color: #222222;
  margin: 0;
  padding: 0;
}

.footcontent {
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
}

.footcontent_left {
  width: 192px;
  height: 30px;
}

.footcontent_left p {
  font-family: MicrosoftYaHei;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 18px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 0.5;
}

.footcontent_center {
  width: 236px;
  height: 44px;
  /* opacity: 0.5; */
}

.footcontent_center img {
  width: 100%;
  height: 100%;
}

.footcontent_right {
  width: 254px;
  height: 30px;
  font-family: MicrosoftYaHei;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 18px;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 0.5;
  text-align: right;
}
.footcontent_right a{
  cursor: pointer;
  color: #ffffff;
}
</style>
