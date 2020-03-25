<template>
  <div class="newsfocus">
    <div class="newsfocus-banner">
      <img :src="banners.image" alt />
    </div>
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
          <p class="title1">“多测合一”跟踪服务</p>
          <p class="title-line"></p>
          <div class="con">
              为贯彻落实党中央和国务院关于深化“放管服”改革，配合机关、职能部门构建科学、便捷、高效的工程建设项目审批和管理体系，助力“最多跑一次”改革进行到底。园区测绘致力于为工程建设项目行政审批提供“多测合一”跟踪服务，提升政府服务效率，营造亲商环境，激发市场活力和社会创造力。
          </div>
          <p class="title2 ">“多测合一”跟踪服务体系</p>
          <img class="img1" src="../../assets/imgs/product/surveyservice-img5.png" alt="">
          
          <p class="title1">服务目标</p>
          <p class="title-line"></p>
          <div class="con">
              整合规划、土地、房产、园林、人防、消防等行业测量技术规范和标准，建立协调统一的工程建设项目综合测量技术标准和工作机制，实现“一次委托、统一测绘、成果共享” ，避免重复测绘，减轻企业负担，为工程建设项目行政并联审批、联合验收提供技术支持，助力行政审批效能提升，优化营商环境。
          </div>
          <div class="img2">
              <div class="img2-l">
                  <div>
                      <p><span></span>多次委托到一次委托</p>
                      <p><span></span>从重复测绘到统一测绘</p>
                      <p><span></span>从数据多样到标准统一</p>
                      <p><span></span>从数据分散到成果共享</p>
                  </div>
              </div>
              <div class="img2-r">
                  <img src="../../assets/imgs/product/surveyservice-img6.png" alt="">
              </div>
          </div>

          <p class="title1">服务内容</p>
          <p class="title-line"></p>
          <p class="title2 ">“多测合一”跟踪服务体系整体架构</p>
          <img class="img3" src="../../assets/imgs/product/surveyservice-img7.png" alt="">
          <p class="title2 ">“多测合一”跟踪服务体系服务内容</p>
          <div class="con2">
              <div class="con2one">
                  <p class="img3-title">规划</p>
                  <p class="img3-con">电子报批审批服务、日照分析服务、规划验线和竣工测量服务</p>
              </div>
              <div class="con2one">
                  <p class="img3-title">国土</p>
                  <p class="img3-con">勘测定界服务、地籍测绘服务</p>
              </div>
          </div>
          <div class="con3">
              <div class="con3one">
                  <p class="img3-title">房产</p>
                  <p class="img3-con">房产预算、房产测量</p>
              </div>
              <div class="con3one">
                  <p class="img3-title">建设</p>
                  <p class="img3-con">管线测量</p>
              </div>
          </div>
          <div class="con3">
              <div class="con3one">
                  <p class="img3-title">城管</p>
                  <p class="img3-con">城市部件测量及管理系统</p>
              </div>
              <div class="con3one">
                  <p class="img3-title">人防</p>
                  <p class="img3-con">人防测量服务</p>
              </div>
          </div>
          <div class="con3">
              <div class="con3one">
                  <p class="img3-title">环保</p>
                  <p class="img3-con">管道检测服务</p>
              </div>
              <div class="con3one">
                  <p class="img3-title">水利</p>
                  <p class="img3-con">水文监测及管理系统</p>
              </div>
          </div>

          <p class="title1">服务特色</p>
          <p class="title-line"></p>
          <div class="con4">
              <div class="con4one">
                  <img src="../../assets/imgs/product/surveyservice-img1.png" alt="">
                  <div>服务部门广、专业测绘精</div>
              </div>
              <div class="con4one">
                  <img src="../../assets/imgs/product/surveyservice-img2.png" alt="">
                  <div>一次测绘、成果共享</div>
              </div>
          </div>
          <div class="con4">
              <div class="con4one">
                  <img src="../../assets/imgs/product/surveyservice-img3.png" alt="">
                  <div>时效管控，限时办结</div>
              </div>
              <div class="con4one">
                  <img src="../../assets/imgs/product/surveyservice-img4.png" alt="">
                  <div>全生命周期跟踪服务</div>
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
      banners:'',
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
                    id: x
                }
            })

        },
        api(){
            //获取banner
            this.$api.get("banners/product-child", {}, res => {
                if (res.data.code == 1) {
                    this.banners = res.data.data[0];
                } else {
                }
            });
            
            this.$api.get("products/category/surveying-service", {}, res => {
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
    margin-top: 100px;
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
    margin-top: 80px;
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
    margin-top: 30px;
}
.newsfocus-con-r .img1{
    width: 823px;
	height: 342px;
    margin-top: 30px;
}
.img2{
    display: flex;
}
.img2-l{
    font-size: 16px;
	color: #666666;
    text-align: left;
    margin-top: 45px;
    line-height: 30px;
}
.img2-l span{
    width: 10px;
	height: 10px;
	background-color: #2190ee;
	border-radius: 2px;
    display: inline-block;
    margin-right: 5px;
}
.img2-r{
    margin-top: 14px;
    margin-left: 120px;
}
.newsfocus-con-r .img3{
    width: 780px;
	height: 438px;
    margin-top: 30px;
    margin-bottom: 30px;
}
.con2{
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
}
.con2one{
    width: 380px;
	height: 110px;
	background-color: #f8f8f8;
    text-align: left;
}
.img3-title{
	font-size: 16px;
	color: #222222;
    margin-top: 16px;
    margin-left: 22px;
    font-weight: bold;
}
.img3-con{
    width: 322px;
	font-size: 14px;
	color: #666666;
    margin-left: 22px;
    margin-top: 10px;
}
.con3{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.con3one{
    width: 380px;
	height: 80px;
	background-color: #f8f8f8;
    text-align: left;
}
.con4{
    text-align: left;
    display: flex;
    justify-content: space-between;
    margin-top: 50px
}
.con4one{
    
}
.con4one img{
    width: 350px;
	height: 263px;
}
.con4one div{
    font-size: 16px;
	color: #222222;
}
.navBarWrap {
    position: fixed;
    top: 70px;
    z-index: 999;
    width:222px;
}
</style>


