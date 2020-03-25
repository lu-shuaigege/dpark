<template>
  <div class="newsfocus">
    <div class="newsfocus-banner">
      <img :src="banner.image" alt />
    </div>
    <p class="newsdetail-con-l-title">
        <span>产品服务 > 自然资源空间信息服务解决方案 > </span>
        <span class="title">软件服务</span>
    </p>
    <div class="newsfocus-top">
        产品服务
    </div>
    <div class="newsfocus-con">
      <div class="newsfocus-con-p">
        <div class="newsfocus-con-l">
          <div :class="navBarFixed == true ? 'navBarWrap' :''">
            <div v-for="item in categorylist" :key="item.id">
              <div class="newsfocus-con-l-list" @click="showLists(item.id)">
                {{item.name}}
                <img v-show="showList!=item.id" class="more-l" src="../../assets/imgs/more-new.png" alt />
                <div class="xiala1" v-show="showList==item.id" @click="showLists(0)">
                    <img  class="xiala" src="../../assets/imgs/more-ud.png" alt="">                      
                </div>
              </div>
              <div v-show="showList==item.id">
                  <div class="newsfocus-con-l-list1" v-for="item1 in list" :key="item1.id" @click="toDetail(item1.id)">
                    - {{item1.title}}
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="newsfocus-con-r">
          <p class="title1">国土空间规划基础信息平台</p>
          <p class="title-line"></p>
          <div class="con">
              面向业务应用服务需求，构建集业务服务、大数据管理于一体的自然资源数据中台——国土空间基础信息平台，统一国土空间工作“底图”、“底板”、“底线”，提高数据服务与应用能力，保障自然资源统一应用管理。
          </div>
          <img class="img1" src="../../assets/imgs/product/7.png" alt="">
          <img class="img2" src="../../assets/imgs/product/softwareproduct-img2.png" alt="">
          <p class="title1">国土空间规划“一张图”实施监督信息系统</p>
          <p class="title-line"></p>
          <div class="con">
              根据《中共中央国务院关于建立国土空间规划体系并监督实施的若干意见》，依托云计算、大数据、地 理信息等信息技术，围绕国土空间规划编制、审批、实施监管、监测评估预警等业务，构建国土空间规 划“一张蓝图”、三大体系（标准规范体系、数据资源体系、应用体系），整体提升国土空间规划“五大能 力” ，即大数据集成能力、规划编制智能分析能力、空间规划执行动态监测能力、监测评估精准能力、 全生命周期闭环管理能力。 
          </div>
          <img class="img3" src="../../assets/imgs/product/softwareproduct-img3.png" alt="">
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
      showList:0,
      list:[],
      categorylist:[],
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
    showLists(x){
        this.showList =x;
        window.event ? (window.event.cancelBubble = true) : e.stopPropagation();
        this.$api.get("products/category/"+x, {}, res => {
          if (res.data.code == 1) {
              this.list = res.data.data.data;
          } else {
          }
      });
    },

    toDetail(x){
      sessionStorage.setItem("pdetailid",x)
      this.$router.push({
          name: 'detail',
          query: {
              id: x,
              field1:1,
              field2:3
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
      
      this.$api.get("product-categories/software/categories", {}, res => {
          if (res.data.code == 1) {
              this.categorylist = res.data.data;
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
  width: 450px;
  border-right: 1px solid #e1e1e1;
}
.newsfocus-con-l-list {
  width: 212px;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  border-bottom: 1px solid #e1e1e1;
  color: #222222;
  padding-left: 10px;
  position: relative;
}
.more-l{
    float: right;
    padding: 17px;
}
.more-d{
    float: right;
    padding: 21px 17px;
}
.newsfocus-con-l-list1 {
  width: 205px;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  border-bottom: 1px solid #e1e1e1;
  color: #666666;
  padding-left: 17px;
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
    margin: 0 auto;
    text-align: left;
    font-size: 14px;
	  color: #333;
    width: 770px;
    margin-top: 20px;
    text-indent: 28px;
    line-height: 24px;
}
.img1{
    margin-top: 40px;
}
.img2{
    margin-top: 50px;
}
.img3{
    margin-top: 57px;
}
.navBarWrap {
    position: fixed;
    top: 70px;
    z-index: 999;
    width:222px;
}
.xiala1{
    width: 100%;
    position: absolute;
    right: 0px;
    top: 0px;
}
.xiala1 img{
    float: right;
    padding: 21px 15px;
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


