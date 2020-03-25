<template>
  <div class="newsfocus">
    <div class="newsfocus-banner">
      <img :src="banners.image" alt />
    </div>
    <p class="newsdetail-con-l-title">
        <span>产品服务 > </span>
        <span class="title">审批服务综合执法一体化平台</span>
    </p>
    <div class="newsfocus-top">
        产品服务
    </div>
    <div class="newsfocus-con">
      <div class="newsfocus-con-p">
        <div class="newsfocus-con-l" >
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
          <p class="title1">审批服务综合执法一体化平台</p>
          <p class="title-line"></p>
          <div class="con">
              围绕地理信息、大数据、移动互联网、物联感知等新一代信息化技术，以城镇现有信息资源为支撑，打造智慧城镇综合管理解决方案，帮助经济发达镇全面推进并落实行政管理体制改革工作建设，创新长效化、精细化、智慧化的城镇管理模式，持续提升城镇社会治理水平。
          </div>
          <img class="img1" src="../../assets/imgs/product/12.png" alt="">
          <img class="img1" src="../../assets/imgs/product/tese.png" alt="">
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

      this.$api.get("products/category/smart-town", {}, res => {
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
  width: 335px;
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
  margin-top: 35px;
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
</style>


