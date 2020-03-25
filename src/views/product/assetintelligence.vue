<template>
  <div class="newsfocus">
    <div class="newsfocus-banner">
      <img :src="banners.image" alt />
    </div>
    <p class="newsdetail-con-l-title">
        <span>产品服务 > </span>
        <span class="title">资产智能化运营管理平台</span>
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
          <p class="title1">建设目标</p>
          <p class="title-line"></p>
          <!-- <div class="con">
              通过融入智能科技，整合GIS、IoT和机器学习等技术，为地产与建筑资产构建统一、高效的资产智能化管理链，提供资产信息采集、运维、统计分析、可视化和决策分析一体化的解决方案。
基于对资产运营过程的全面洞悉，用户可聚焦业务发展痛点，并以数据驱动的方式来实现在商业地产租售、工业厂房租赁及设备设施管理等领域的管理节流和运营增收。
          </div>
          <img class="img1" src="../../assets/imgs/product/13.png" alt=""> -->
          <div class="assetintelligence-con1">
            <div class="div1">
              帮助还原资产的数字孪生，解决资产管理缺乏系统化和全覆盖问题，以及资产的过程追踪管理难、问题不易溯源等困难 ;
            </div>
            <div class="div2">
              具备整合多个已有系统的 跨 业务数据治理能力，解决跨系统造成的数据孤岛的问题;
            </div>
            <img class="img1" src="../../assets/imgs/product/14.png" alt=""> 
            <div class="div3">
              从城市、区域、地块、建筑、楼层再到商户或其他管理对象建立资产全量分布的一张图掌控，解决资产众多、分布离散导致的盘点困难的问题 ;
            </div>
            <div class="div4">
              线上租售从2B和2C两层把控，以信息技术打通内部环节，解决租售治理难的问题。
            </div>
          </div>
          <p class="title1">产品特色</p>
          <p class="title-line"></p>
          <div class="assetintelligence-con2">
            <div class="div1">
              <p>立体式资产管理</p>
              融合地图、三维模型、多维度图表等立体而 多
              元的技术手段，以直观可视的方式简化资 产信
              息的管理和分析过程，降低管理者理解 数据和
              识别风险的难度。
            </div>
            <img class="img1" src="../../assets/imgs/product/15.png" alt=""> 
            <div class="div2">
              <p>多终端信息服务</p>
              具备电脑端、手机端、大屏 端、VR/AR端
等多终端多系 统协同应用能力，满足不 同
场景的信息服务和数据 应用需要。
            </div>
            <div class="div3">
              <p>全周期资产追踪</p>
              覆盖资产建成、变更、盘点、运 营、注销等各个环
节，让资产追 踪管理无死角。
            </div>
            <div class="div4">
              <p>专业化数据分析</p>
              面向租售组合优化、商户销售增收等不同业务需
求，提供深度的楼宇空间数据分析服务，让数据
产生价值，让资产运营更简单。
            </div>
            <div class="div5">
              <p>智能化资产运营</p>
              运营管理结合了资产空间编 码、自动身份认证
和IoT设备 运维等智能技术，让资产运 营过程
更安全可靠。
            </div>
          </div>
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
          id: x
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

      this.$api.get("products/category/assets", {}, res => {
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
    margin-top: 30px;
}
.img1{
  margin-top: 50px;
}
.navBarWrap {
    position: fixed;
    top: 70px;
    z-index: 999;
    width:222px;
}
.newsdetail-con-l-title{
  width: 1200px;
  margin: 0 auto;
  font-size: 14px;
  color: #666666;
  height: 30px;
  margin-top: 20px;
}
.newsdetail-con-l-title .title{
    color: #1280e1;
}
.assetintelligence-con1{
  width: 780px;
  height: 340px;
  position: relative;
  margin-top: 40px;
}
.assetintelligence-con1 img{
  width: 780px;
  height: 60px;
  position: absolute;
  top: 60px;
  left: 0;
}
.assetintelligence-con1 div{
  width: 192px;
	/* height: 88px; */
	font-size: 14px;
	line-height: 24px;
	color: #222222;
  position: absolute;
  text-align: left;
}
.assetintelligence-con1 .div1{
  top: 0;
  left: 0;
}
.assetintelligence-con1 .div2{
  top: 0;
  left: 395px;
}
.assetintelligence-con1 .div3{
  top: 190px;
  left: 195px;
}
.assetintelligence-con1 .div4{
  top: 180px;
  left: 590px;
}
.assetintelligence-con2{
  width: 780px;
  height: 540px;
  position: relative;
  margin-top: 40px;
}
.assetintelligence-con2 img{
  position: absolute;
  top: 100px;
  left: 293px;
}
.assetintelligence-con2 div{
  width: 250px;
	font-size: 14px;
	line-height: 24px;
	color: #222222;
  position: absolute;
  text-align: left;
}
.assetintelligence-con2 div p{
  font-size: 16px;
  color: #1280e1;
  padding-bottom: 8px;
}
.assetintelligence-con2 .div1{
  top: 0;
  left: 260px;
}
.assetintelligence-con2 .div2{
  top: 150px;
  left: 18px;
}
.assetintelligence-con2 .div3{
  top: 150px;
  left: 521px;
}
.assetintelligence-con2 .div4{
  top: 341px;
  left: 103px;
}
.assetintelligence-con2 .div5{
  top: 340px;
  left: 471px;
}
</style>


