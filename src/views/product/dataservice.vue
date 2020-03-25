<template>
  <div class="newsfocus">
    <div class="newsfocus-banner">
      <img :src="banner.image" alt />
    </div>
    <p class="newsdetail-con-l-title">
        <span>产品服务 > 自然资源空间信息服务解决方案 > </span>
        <span class="title">数据服务</span>
    </p>
    <div class="newsfocus-top">
        产品服务
    </div>
    <div class="newsfocus-con">
      <div class="newsfocus-con-p">
        <div class="newsfocus-con-l">
          <div :class="navBarFixed == true ? 'navBarWrap' :''">
            <div class="newsfocus-con-l-list" v-for="item in list" :key="item.id" @click="toDetail(item.id)">
                <span style="width: 170px;display: inline-block;line-height: 24px;">{{item.title}}</span> 
                <img src="../../assets/imgs/more-new.png" alt />
            </div>
          </div>
        </div>
        <div class="newsfocus-con-r">
          <p class="title1">自然资源数据服务</p>
          <p class="title-line"></p>
          <div class="con">
              面向自然资源行业，构建完整的数据资源体系、制定统一的数据标准，提供全流程、全类型的数据调研、收集、加工、整理、建库、日常应用、分析挖掘服务。
          </div>
          <img class="img1" src="../../assets/imgs/product/dataservice-img1.png" alt="">
          <p class="title1">服务特色</p>
          <p class="title-line"></p>
          <div class="con1">
              <img src="../../assets/imgs/product/dataservice-img4.png" alt="">
              <div class="con1-l">
                  <p>全类别数据高效建库、统一标准、共享使用</p>
                  <div>
                      依托专业的数据服务团队，设计完善的数据标准、规范体系，并依此将自规划涉及的全类别、碎片化的存量数据进行批量整合、统一空间基准、数据格式标准、长效更新维护，提升数据质量。
                  </div>
              </div>
              <div class="con1-r">
                  <p>全覆盖自然资源一张图，“一数一源”动态更新</p>
                  <div>
                      形成覆盖现状、规划、管理、社会经济的一张“底图”， 横向整合，纵向贯通各业务系统数据资源，通过多源数据冲突检测、处理与动态更新，使数据资源从散到聚、从有到用的链条管控。
                  </div>
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
      list:[],
      banner:'',
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
    toDetail(x){
      sessionStorage.setItem("pdetailid",x)
      this.$router.push({
          name: 'detail',
          query: {
              id: x,
              field1:1,
              field2:2
          }
      })

    },
    api(){
      //获取banner
      this.$api.get("banners/product-child", {}, res => {
          if (res.data.code == 1) {
              this.banner = res.data.data[0];
          } else {
          }
      });
      
      this.$api.get("products/category/data-service", {}, res => {
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
	color: #333;
    width: 770px;
    margin-top: 20px;
    text-indent: 28px;
    line-height: 24px;
}
.img1{
    width: 780px;
	height: 172px;
    margin-top: 49px;
}
.con1{
    position: relative;
    height: 646px;
    margin-top: 40px;
}
.con1 img{
    position: absolute;
    left: 0;
    top: 0;
}
.con1-l{
    text-align: left;
    width: 336px;
}
.con1-l p{
    font-size: 16px;
	color: #222222;
    padding-top: 67px;
}
.con1-l div{
    font-size: 14px;
	color: #666666;
    margin-top: 12px;
    line-height: 24px;
}
.con1-r{
    text-align: left;
    width: 336px;
    margin-left: 440px;
    margin-top: 217px;
}
.con1-r p{
    font-size: 16px;
	color: #222222;
}
.con1-r div{
    font-size: 14px;
	color: #666666;
    margin-top: 12px;
    line-height: 24px;
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


