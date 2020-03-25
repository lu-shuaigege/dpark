<template>
  <div class="newsfocus">
    <div class="newsfocus-banner">
      <img :src="banners.image" alt />
    </div>
    <p class="newsdetail-con-l-title">
        <span>产品服务 > 资产智能化运营管理平台 > </span>
        <span class="titl">经典案例</span>
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
          
          <p class="title1">经典案例</p>
          <p class="title-line"></p>
          <div class="con4">
              <div class="con4one">
                  <img src="../../assets/imgs/newproduct/case-img1.png" alt="">
                  <div>滁州资产管理系统</div>
              </div>
              <div class="con4one">
                  <img src="../../assets/imgs/newproduct/case-img2.png" alt="">
                  <div>滁州资产管理系统</div>
              </div>
          </div>
          <div class="con4">
              <div class="con4one">
                  <img src="../../assets/imgs/newproduct/case-img3.png" alt="">
                  <div>新建元数据洞察系统</div>
              </div>
              <div class="con4one">
                  <img src="../../assets/imgs/newproduct/case-img4.png" alt="">
                  <div>新建元资产可视化系统</div>
              </div>
          </div>
          <div class="con4">
              <div class="con4one">
                  <img src="../../assets/imgs/newproduct/case-img5.png" alt="">
                  <div>新建元网上营销平台</div>
              </div>
              <div class="con4one">
                  <img src="../../assets/imgs/newproduct/case-img6.png" alt="">
                  <div>新建元网上营销平台</div>
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
                    id: x,
                    field1:4,
                    field2:11
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
            
            this.$api.get("products/category/classic-case", {}, res => {
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
	color: #333;
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
	color: #333;
    margin-top: 35px;
}
.newsfocus-con-r .con{
    text-align: left;
    font-size: 14px;
	color: #333;
    width: 770px;
    margin-top: 20px;
    line-height: 24px;
    text-indent: 28px;
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
    margin-top: 40px;
    width: 782px;
}
.con4one{
}
.con4one img{
    width: 377px;
	height: 225px;
}
.con4one div{
    font-size: 14px;
	color: #222222;
    text-align: center;
    margin-top: 5px;
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
.newsdetail-con-l-title .titl{
    color: #1280e1;
}
</style>


