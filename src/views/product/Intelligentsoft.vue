<template>
  <div class="newsfocus">
    <div class="newsfocus-banner">
      <img :src="banners.image" alt />
    </div>
    <p class="newsdetail-con-l-title">
        <span>产品服务 > 资产智能化运营管理平台 > </span>
        <span class="titl">软件产品</span>
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
          <p class="title1">资产信息管理系统</p>
          <p class="title-line"></p>
          <div class="con">
             为中大型企业量身定制资产信息管理系统，实现资产信息收集、管理一体化，提供固定资产管理、资产信息登记、合同管理、缴费管理等资产管理工具，帮助业务人员、管理人员快速掌握管辖范围内的资产信息资源，助力企业解决资产管理困难问题。
          </div>

          <div class="soft-p">
              <img src="../../assets/imgs/newproduct/nerproduct-img7.png" alt="">
              <p class="p1">多账户协同管理，可满足企业统一管理用户及权限</p>
              <p class="p2">资产建成、运营、销售、盘点、注销等生命周期跟踪管理</p>
              <p class="p3">资产经营计划、目标、运营过程、完成情况等信息管理</p>
          </div>

          <div class="soft-s">
              <img src="../../assets/imgs/newproduct/nerproduct-img8.png" alt="">
              <p class="s1">租赁管理（租金计划及催缴）</p>
              <p class="s2">报表模块（资产统计）</p>
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
          id: x,
          field1:4,
          field2:9
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

      this.$api.get("products/category/software-product", {}, res => {
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
.navBarWrap {
    position: fixed;
    top: 70px;
    z-index: 999;
    width:222px;
}
.soft-p{
    margin-top: 30px;
    position: relative;
    text-align: left;
}
.soft-p p{
    font-size: 14px;
	color: #666666;
    position: absolute;
}
.soft-p .p1{
    top: 20px;
    left: 320px;
}
.soft-p .p2{
    top: 125px;
    left: 406px;
}
.soft-p .p3{
    top: 223px;
    left: 320px;
}
.soft-s{
    margin-top: 80px;
    position: relative;
}
.soft-s .s1{
    font-size: 14px;
	  color: #333;
    position: absolute;
    top: 395px;
    left: 120px;
}
.soft-s .s2{
    font-size: 14px;
	color: #333;
    position: absolute;
    top: 445px;
    left: 484px;
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


