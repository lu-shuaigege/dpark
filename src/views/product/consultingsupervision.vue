<template>
  <div class="supervision">
    <div class="supervision-banner">
     <img :src="banners.image" alt />
    </div>
    <p class="newsdetail-con-l-title">
        <span>产品服务 > 自然资源空间信息服务解决方案 > </span>
        <span class="titl">咨询监理</span>
    </p>
    <div class="supervision-first">
        <div class="supervision-firstone">
            <img src="../../assets/imgs/product/consultingsupervision-img1.png" alt="">
            <div>
                <p class="title"><1>测绘类项目监理服务</p>
                <p class="con">提供自然资源调查、测绘监理工作计划和实施方案；实施监理业务，保障监理项目按既定的质量、进度和费用目标完成；强化技术管理，实地验证、跟踪、调查、测量；定期做好抽样检查，形成全过程的监理文件资料。</p>
            </div>
        </div>
        <div class="supervision-firsttwo">
            <img src="../../assets/imgs/product/consultingsupervision-img2.png" alt="">
            <img src="../../assets/imgs/product/consultingsupervision-img3.png" alt="">
            <img src="../../assets/imgs/product/consultingsupervision-img4.png" alt="">
        </div>
    </div>
    <div class="supervision-second">
        <div class="supervision-second-con">
            <div class="">
                <p class="title1"><2>数据类项目监理服务</p>
                <p class="con1">依托丰富的数据服务项目实施及管理经验，完善的项目监理制度，为客户的数据整理建库、专项数据加工类项目提供全过程监理服务。</p>
            </div>
            <img class="img1" src="../../assets/imgs/product/consultingsupervision-img5.png" alt="">
        </div>
    </div>
     <div class="supervision-third">
        <div class="supervision-third-con">
            <img class="img2" src="../../assets/imgs/product/consultingsupervision-img6.png" alt="">
            <div style="margin-left:180px">
                <p class="title1"><3>软件类项目监理服务</p>
                <p class="con1"> 基于自身丰富的项目实施经验，在信息化项目建设过程中，为客户提供全过程监理服务。</p>
                <div style="margin-left: 68px;margin-top: 20px;">
                    <button>三控制</button>
                    <button>二管理</button>
                    <button>一协调</button>
                </div>
            </div>
        </div>
    </div>
    <div class="supervision-four">
        <div class="supervision-four-con">
            <img class="img3" src="../../assets/imgs/product/consultingsupervision-img7.png" alt="">
            <div style="margin-left:700px;">
                <p class="title1"><4>数据服务类项目咨询服务</p>
                <p class="con1">依托20多年的测绘经验沉淀，十多年数字城市建设过程中数据资源建设及应用的业务知识积累，可以提供数据服务类项目的前期立项咨询服务，协助开展项目现状分析、项目需求分析、项目可行性分析、项目工作量评估、项目技术路线探索、项目概要方案设计等工作。</p>
            </div>
        </div>
    </div>
    <div class="supervision-five">
        <p class="title2"><5>信息化项目咨询服务</p>
        <p class="con2">在项目开展前期，为客户提供调研、分析、规划、设计等服务，最终完成项目的方案编制和评审汇报，顺利推进项目立项实施。</p>
        <img class="img4" src="../../assets/imgs/product/consultingsupervision-img8.png" alt="">
    </div>
    
    <Footer class="footer"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/footer/footer.vue";
export default {
  data() {
    return {
      banners:'',
    };
  },
  components: {
    Footer
  },
  created() {
    //获取banner
    this.$api.get("banners/product-child", {}, res => {
    if (res.data.code == 1) {
        this.banners = res.data.data[0];
    } else {
    }
    });
},
  methods: {
    

  }
};
</script>

<style scoped>
.supervision-banner {
  width: 100%;
  /* height: 470px; */
  margin-top: 70px;
  font-size: 0;
}
.supervision-banner img {
  width: 100%;
  /* height: 470px; */
}
.supervision-first{
    width: 1200px;
    margin: 0 auto;
    margin-top: 100px;
}
.supervision-firstone{
    display: flex;
    justify-content: space-between;
}
.supervision-firstone div{
    width: 480px;
	height: 550px;
	background-color: #1280e1;
}
.supervision-firsttwo{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.title{
    font-size: 24px;
	color: #ffffff;
    margin-top: 153px;
    margin-left: 68px;
}
.con{
    font-size: 14px;
	color: #ffffff;
    width: 336px;
    margin-left: 68px;
    margin-top: 15px;
    line-height: 24px;
}
.supervision-second{
    width: 100%;
    height: 499px;
	background-color: #f8f8f8;
    margin-top: 100px;
}
.supervision-second-con{
    width: 1200px;
    margin: 0 auto;
    position: relative;
}
.title1{
    font-size: 24px;
	color: #222222;
    padding-top: 180px;
    margin-left: 68px;
}
.con1{
    font-size: 14px;
	color: #333;
    width: 336px;
    margin-left: 68px;
    margin-top: 15px;
    line-height: 24px;
}
.img1{
    position: absolute;
    top: -2px;
    right: -360px;
    width: 1015px;
	height: 501px;
}
.supervision-third-con{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    padding-top: 100px;
}
.supervision-third-con button{
    width: 100px;
	height: 36px;
	background-color: #1280e1;
    font-size: 14px;
	color: #ffffff;
    outline-style: none;
    border: none;
}
.supervision-four{
    width: 100%;
    height: 499px;
	background-color: #f8f8f8;
    margin-top: 100px;
}
.supervision-four-con{
    width: 1200px;
    margin: 0 auto;
    position: relative;
}
.img3{
    position: absolute;
    top: -2px;
    left: -360px;
    width: 1015px;
	height: 501px;
}
.supervision-five{
    text-align: center;
    margin-bottom: 100px;
}
.title2{
    font-size: 24px;
	color: #222222;
    margin-top: 100px;
}
.con2{
    font-size: 14px;
	color: #666666;
    width: 602px; 
    margin: 0 auto;
    line-height: 24px;
    margin-top: 30px;
}
.img4{
    margin-top: 45px;
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


