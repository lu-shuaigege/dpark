<template>
  <div class="newsfocus">
    <div class="newsfocus-banner">
      <img :src="banners.image" alt />
    </div>
    <p class="newsdetail-con-l-title">
        <span>产品服务 > 资产智能化运营管理平台 > </span>
        <span class="titl">服务产品</span>
    </p>
    <div class="newsfocus-top">
        产品服务
    </div>
    <div class="newsfocus-con">
      <div class="newsfocus-con-p">
        <div class="newsfocus-con-l">
          <div :class="navBarFixed == true ? 'navBarWrap' :''">
            <div
              class="newsfocus-con-l-list"
              v-for="item in list"
              :key="item.id"
              @click="toDetail(item.id)"
            >
              <span style="width: 170px;display: inline-block;line-height: 24px;">{{item.title}}</span>
              <img src="../../assets/imgs/more-new.png" alt />
            </div>
          </div>
        </div>
        <div class="newsfocus-con-r">
          <p class="title1">资产智能化运营管理平台</p>
          <p class="title-line"></p>
          <div class="con">
              通过融入智能科技，整合GIS、IoT和机器学习等技术，为地产与建筑资产构建统一、高效的资产智能化管理链，提供资产信息采集、运维、统计分析、可视化和决策分析一体化的解决方案。
基于对资产运营过程的全面洞悉，用户可聚焦业务发展痛点，并以数据驱动的方式来实现在商业地产租售、工业厂房租赁及设备设施管理等领域的管理节流和运营增收。
          </div>
          <div class="intprocase1">
              <img src="../../assets/imgs/newproduct/nerproduct-img9.png" alt="">
              <div class="intprocase1-p1">
                  <p>建立场景数据决策，挖掘数据价值</p>
                  <p>行业行为特征洞察、竞争策略透视</p>
                  <p>品牌效应等多场景分析</p>
              </div>
              <div class="intprocase1-p2">
                  <p>融合企业沉睡数据</p>
                  <p>打造单视图数据仓库</p>
                  <p>构建以人和产品为核心的数据模型</p>
              </div>
              <div class="intprocase1-p3">
                  <p>灵活自由的指标展示</p>
                  <p>多维研究与跟踪数据</p>
                  <p>实时市场预警提醒</p>
                  <p>第一时间获取异动信息</p>
              </div>
          </div>

          <img class="img1" src="../../assets/imgs/newproduct/nerproduct-img10.png" alt="">
          <p style="font-size: 14px;color:#333;margin-top:5px">人、资、财规划</p>
          
        </div>
      </div>
    </div>
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/footer/footer.vue";
export default {
  data() {
    return {
      list: [],
      banners: "",
      navBarFixed:false,
      ltop:0
    };
  },
  components: {
    Footer
  },
  created() {
    this.api();
  },
  mounted(){
    window.addEventListener("scroll", this.hidemenu); //监听滚动事件
    this.ltop = ($(".newsfocus-con-l").offset().top)-70;
  },
  methods: {
    hidemenu(){
      let scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

      if (scrollTop > this.ltop) {
          this.navBarFixed = true
      }else{
          this.navBarFixed = false
      }
    },
    toDetail(x) {
      sessionStorage.setItem("pdetailid", x);
      this.$router.push({
        name: "detail",
        query: {
          id: x,
          field1:4,
          field2:10
        }
      });
    },
    api() {
      //获取banner
      this.$api.get("banners/product-child", {}, res => {
        if (res.data.code == 1) {
          this.banners = res.data.data[0];
        } else {
        }
      });

      this.$api.get("products/category/service-product", {}, res => {
        if (res.data.code == 1) {
          this.list = res.data.data.data;
        } else {
        }
      });
    }
  },
  beforeDestroy() {
      window.removeEventListener("scroll", this.hidemenu);
  }
};
</script>

<style scoped>
.newsfocus-banner {
  width: 100%;
  height: 470px;
  margin-top: 70px;
  font-size: 0;
}
.newsfocus-banner img {
  width: 100%;
  height: 470px;
}
.newsfocus-top{
    width: 1200px;
    margin: 0 auto;
    margin-top: 60px;
    border-bottom: 1px solid #e1e1e1;
    font-size: 24px;
	font-weight: bold;
    color: #222222;
    height: 48px;
}
.newsfocus-con {
    width: 100%;
    margin-bottom: 100px;
}
.newsfocus-con-p {
  width: 1200px;
  margin: 0 auto;
  display: flex;
}
.newsfocus-con-l {
  width: 222px;
  border-right: 1px solid #e1e1e1;
}
.newsfocus-con-l-list {
  width: 222px;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  border-bottom: 1px solid #e1e1e1;
  color: #222222;
}
.newsfocus-con-l-list img{
    float: right;
    padding: 17px;
}
.newsfocus-con-r{
    text-align: center;
    margin: 0 auto;
}
.newsfocus-con-r .title1{
    font-size: 20px;
	color: #222222;
    margin-top: 50px;
}
.newsfocus-con-r .title-line{
    width: 40px;
	height: 2px;
    background-color: #1280e1;
    margin: 0 auto;
}
.newsfocus-con-r .title2{
    font-size: 16px;
	font-weight: bold;
	color: #222222;
    margin-top: 35px;
}
.newsfocus-con-r .con{
    text-align: left;
    font-size: 14px;
	  color: #666666;
    width: 770px;
    margin: 0 auto;
    margin-top: 20px;
    line-height: 24px;
    text-indent: 28px;
}
.img1{
  margin-top: 100px;
}
.navBarWrap {
    position: fixed;
    top: 70px;
    z-index: 999;
    width:222px;
}
.intprocase1{
    position: relative;
    margin-top: 30px;
}
.intprocase1 p{
    font-size: 14px;
	color: #666666;
}
.intprocase1-p1{
    position: absolute;
    top: 30px;
    left: 280px;
    line-height: 24px;
}
.intprocase1-p2{
    position: absolute;
    top: 200px;
    left: 28px;
    line-height: 24px;
}
.intprocase1-p3{
    position: absolute;
    top: 200px;
    left: 584px;
    line-height: 24px;
}
.newsdetail-con-l-title{
  width: 1200px;
  margin: 0 auto;
  font-size: 14px;
  color: #666666;
  height: 30px;
  margin-top: 20px;
}
.newsdetail-con-l-title .titl{
    color: #1280e1;
}
</style>


